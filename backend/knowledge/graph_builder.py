"""
Chemo Companion - Knowledge Graph Builder
Builds a NetworkX directed graph from extracted entities and relationships.
"""
import json
from pathlib import Path
from typing import Optional

import networkx as nx

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from config import ENTITIES_DIR, GRAPH_DIR
from knowledge.aac_data import MOCK_PEERS, AAC_ACTIVITIES


def build_graph(entities_file: Optional[Path] = None) -> nx.DiGraph:
    """
    Build a knowledge graph from extracted entities and relationships.
    Nodes = entities, Edges = relationships.
    """
    entities_file = entities_file or (ENTITIES_DIR / "all_entities.json")

    all_results = []
    if entities_file.exists():
        with open(entities_file, "r", encoding="utf-8") as f:
            all_results = json.load(f)
    else:
        print(f"[Graph Builder] No entities file found at {entities_file}. Starting with empty graph.")

    G = nx.DiGraph()

    for result in all_results:
        source_pdf = result.get("source", "unknown")
        page = result.get("page", 0)
        chunk_id = result.get("chunk_id", "")

        # Add entity nodes
        for entity in result.get("entities", []):
            node_id = entity["text"].lower().strip()
            entity_type = entity.get("type", "UNKNOWN")

            if G.has_node(node_id):
                # Merge: add source to existing node
                G.nodes[node_id]["sources"].append({
                    "pdf": source_pdf, "page": page, "chunk": chunk_id
                })
                G.nodes[node_id]["frequency"] += 1
            else:
                G.add_node(node_id, **{
                    "label": entity["text"],
                    "type": entity_type,
                    "sources": [{"pdf": source_pdf, "page": page, "chunk": chunk_id}],
                    "frequency": 1,
                })

        # Add relationship edges
        for rel in result.get("relationships", []):
            src = rel.get("source", "").lower().strip()
            tgt = rel.get("target", "").lower().strip()
            relation = rel.get("relation", "RELATED_TO")

            if src and tgt:
                # Ensure nodes exist
                if not G.has_node(src):
                    G.add_node(src, label=rel.get("source", src),
                               type="UNKNOWN", sources=[], frequency=1)
                if not G.has_node(tgt):
                    G.add_node(tgt, label=rel.get("target", tgt),
                               type="UNKNOWN", sources=[], frequency=1)

                if G.has_edge(src, tgt):
                    G.edges[src, tgt]["weight"] += 1
                    G.edges[src, tgt]["sources"].append(source_pdf)
                else:
                    G.add_edge(src, tgt, **{
                        "relation": relation,
                        "weight": 1,
                        "sources": [source_pdf],
                    })

    # --- Add AAC & Peer Data ---
    # Add AAC Activities
    for activity in AAC_ACTIVITIES:
        act_id = activity["id"]
        G.add_node(act_id, **{
            "label": activity["name"],
            "type": "AAC_ACTIVITY",
            "energy_req": activity["energy_req"],
            "interests": activity["interests"],
            "description": activity["description"],
            "sources": ["AAC_CATALOG"],
            "frequency": 1
        })
        
        # Link activity to interests
        for interest in activity["interests"]:
            int_id = interest.lower().strip()
            if not G.has_node(int_id):
                G.add_node(int_id, label=interest, type="INTEREST", sources=["AAC_CATALOG"], frequency=1)
            G.add_edge(act_id, int_id, relation="HAS_INTEREST", weight=1, sources=["AAC_CATALOG"])

    # Add Mock Peers
    for peer in MOCK_PEERS:
        peer_id = peer["id"]
        G.add_node(peer_id, **{
            "label": peer["name"],
            "type": "PATIENT",
            "age": peer["age"],
            "cancer_type": peer["cancer_type"],
            "recovery_score": peer["recovery_score"],
            "interests": peer["interests"],
            "sources": ["PEER_DB"],
            "frequency": 1
        })
        
        # Link peer to interests
        for interest in peer["interests"]:
            int_id = interest.lower().strip()
            if not G.has_node(int_id):
                G.add_node(int_id, label=interest, type="INTEREST", sources=["PEER_DB"], frequency=1)
            G.add_edge(peer_id, int_id, relation="INTERESTED_IN", weight=1, sources=["PEER_DB"])
            
        # Link peer to cancer type
        cancer_id = peer["cancer_type"].lower() + " cancer"
        if G.has_node(cancer_id):
            G.add_edge(peer_id, cancer_id, relation="HAS_CONDITION", weight=1, sources=["PEER_DB"])

    print(f"[Graph Builder] Built graph: {G.number_of_nodes()} nodes, "
          f"{G.number_of_edges()} edges")

    return G


def save_graph(G: nx.DiGraph, output_dir: Optional[Path] = None):
    """Save graph to multiple formats for persistence and visualization."""
    output_dir = output_dir or GRAPH_DIR

    # Save as JSON (for frontend visualization)
    graph_data = {
        "nodes": [],
        "links": [],
    }
    for node_id, data in G.nodes(data=True):
        # Convert sources to serializable format
        sources = data.get("sources", [])
        if sources and isinstance(sources[0], dict):
            sources = [s.get("pdf", str(s)) for s in sources]
        graph_data["nodes"].append({
            "id": node_id,
            "label": data.get("label", node_id),
            "type": data.get("type", "UNKNOWN"),
            "frequency": data.get("frequency", 1),
            "sources": list(set(sources)),
        })

    for src, tgt, data in G.edges(data=True):
        graph_data["links"].append({
            "source": src,
            "target": tgt,
            "relation": data.get("relation", "RELATED_TO"),
            "weight": data.get("weight", 1),
        })

    with open(output_dir / "knowledge_graph.json", "w", encoding="utf-8") as f:
        json.dump(graph_data, f, indent=2, ensure_ascii=False)

    # Save as GraphML (for NetworkX reload)
    # Need to convert non-serializable attributes
    G_export = G.copy()
    # Need to convert non-serializable attributes
    G_export = G.copy()
    for node_id, node_data in G_export.nodes(data=True):
        for attr, value in node_data.items():
            if isinstance(value, list):
                G_export.nodes[node_id][attr] = json.dumps(value)
    
    for u, v, edge_data in G_export.edges(data=True):
        for attr, value in edge_data.items():
            if isinstance(value, list):
                G_export.edges[u, v][attr] = json.dumps(value)

    nx.write_graphml(G_export, str(output_dir / "knowledge_graph.graphml"))

    print(f"[Graph Builder] Saved to {output_dir}")


def load_graph(graph_dir: Optional[Path] = None) -> nx.DiGraph:
    """Load graph from JSON file."""
    graph_dir = graph_dir or GRAPH_DIR
    json_file = graph_dir / "knowledge_graph.json"

    with open(json_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    G = nx.DiGraph()
    for node in data["nodes"]:
        G.add_node(node["id"], **{
            "label": node["label"],
            "type": node["type"],
            "frequency": node["frequency"],
            "sources": node["sources"],
        })
    for link in data["links"]:
        G.add_edge(link["source"], link["target"], **{
            "relation": link["relation"],
            "weight": link["weight"],
        })

    return G


def query_graph(G: nx.DiGraph, entity: str, depth: int = 2) -> dict:
    """
    Query the knowledge graph for information about an entity.
    Returns connected entities up to `depth` hops away.
    """
    entity_lower = entity.lower().strip()

    # Find matching nodes
    matches = []
    for node_id in G.nodes():
        if entity_lower in node_id or node_id in entity_lower:
            matches.append(node_id)

    if not matches:
        return {"entity": entity, "found": False, "connections": []}

    connections = []
    for match in matches:
        node_data = G.nodes[match]

        # Get neighbors (outgoing)
        for _, neighbor in G.out_edges(match):
            edge_data = G.edges[match, neighbor]
            neighbor_data = G.nodes.get(neighbor, {})
            connections.append({
                "from": node_data.get("label", match),
                "relation": edge_data.get("relation", "RELATED_TO"),
                "to": neighbor_data.get("label", neighbor),
                "to_type": neighbor_data.get("type", "UNKNOWN"),
            })

        # Get neighbors (incoming)
        for neighbor, _ in G.in_edges(match):
            edge_data = G.edges[neighbor, match]
            neighbor_data = G.nodes.get(neighbor, {})
            connections.append({
                "from": neighbor_data.get("label", neighbor),
                "relation": edge_data.get("relation", "RELATED_TO"),
                "to": node_data.get("label", match),
                "to_type": node_data.get("type", "UNKNOWN"),
            })

    return {
        "entity": entity,
        "found": True,
        "node_data": G.nodes[matches[0]] if matches else {},
        "connections": connections,
    }


if __name__ == "__main__":
    G = build_graph()
    save_graph(G)

    # Test a query
    result = query_graph(G, "nausea")
    print(f"\nGraph query for 'nausea':\n{json.dumps(result, indent=2, default=str)}")
