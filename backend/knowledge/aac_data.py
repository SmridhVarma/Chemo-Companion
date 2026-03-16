"""
Mock data for AAC Activities and Peer Profiles.
Used to demonstrate Intelligent AAC Matching (FR 6).
"""

# AAC Activities with energy requirements and interest tags
AAC_ACTIVITIES = [
    {
        "id": "aac_gardening_mild",
        "name": "Healing Garden - Gentle Weeding",
        "interests": ["Gardening", "Nature", "Outdoors"],
        "energy_req": 20,
        "clinical_suitability": ["Mild Fatigue", "Anxiety"],
        "description": "A low-intensity gardening session focusing on therapeutic plants."
    },
    {
        "id": "aac_yoga_moderate",
        "name": "Restorative Yoga",
        "interests": ["Yoga", "Wellness", "Mindfulness"],
        "energy_req": 40,
        "clinical_suitability": ["Moderate Fatigue", "Muscle Pain"],
        "description": "Slow-paced yoga with props to support recovery and flexibility."
    },
    {
        "id": "aac_art_therapy",
        "name": "Expressive Art Workshop",
        "interests": ["Art", "Painting", "Creativity"],
        "energy_req": 30,
        "clinical_suitability": ["Anxiety", "Depression", "Cognitive Changes"],
        "description": "A creative space to express emotions through painting and sketching."
    },
    {
        "id": "aac_walking_group",
        "name": "Community Nature Walk",
        "interests": ["Walking", "Social", "Nature"],
        "energy_req": 60,
        "clinical_suitability": ["High Energy", "Remission"],
        "description": "A 1.5km brisk walk through the local park with peer mentors."
    },
    {
        "id": "aac_cooking_nutrition",
        "name": "Oncology-Friendly Cooking",
        "interests": ["Cooking", "Nutrition", "Health"],
        "energy_req": 50,
        "clinical_suitability": ["Loss of Appetite", "Stable"],
        "description": "Learn to prepare nutrient-dense meals that manage side effects."
    }
]

# Mock Peer Profiles for Matching
MOCK_PEERS = [
    {
        "id": "peer_1",
        "name": "Sarah J.",
        "age": 55,
        "cancer_type": "Breast",
        "interests": ["Gardening", "Yoga", "Mindfulness"],
        "recovery_score": 65,
        "status": "Living",
        "bio": "Recovering from Cycle 4. Loves urban farming and quiet mornings."
    },
    {
        "id": "peer_2",
        "name": "Michael L.",
        "age": 62,
        "cancer_type": "Lung",
        "interests": ["Nature", "Walking", "Art"],
        "recovery_score": 45,
        "status": "Living",
        "bio": "Former teacher. Finding peace in landscape painting during treatment."
    },
    {
        "id": "peer_3",
        "name": "Elena R.",
        "age": 49,
        "cancer_type": "Colorectal",
        "interests": ["Cooking", "Nutrition", "Social"],
        "recovery_score": 75,
        "status": "Living",
        "bio": "Nutritionist turned patient advocate. Big believer in food as medicine."
    },
    {
        "id": "peer_4",
        "name": "David W.",
        "age": 70,
        "cancer_type": "Lung",
        "interests": ["Outdoors", "Nature", "Health"],
        "recovery_score": 30,
        "status": "Living",
        "bio": "Taking it one day at a time. Enjoys birdwatching from the clinic garden."
    }
]
