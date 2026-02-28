import { Users, Calendar, Heart, MessageCircle, Bell } from 'lucide-react';
import imgCommunity from "figma:asset/b9c4e79959ea4ad2f4ada235b0b7c0d0df14298a.png";

export function Community() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="backdrop-blur-xl bg-gradient-to-r from-white/80 to-white/70 rounded-3xl p-8 shadow-2xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-200/15 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="relative text-center">
          <div className="w-72 h-72 mx-auto mb-6 rounded-3xl overflow-hidden bg-white/50 shadow-xl border border-white/60 p-4">
            <img 
              src={imgCommunity} 
              alt="Community" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-indigo-50/80 px-4 py-2 rounded-full mb-4 border border-indigo-200/60">
            <Users className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">
              Social Wall • 3,429 Members
            </span>
          </div>
          
          <h1 className="text-3xl font-serif text-gray-800 mb-3">
            You're Not Alone
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with a caring community of others who are on this journey together.
            Share stories and find hope.
          </p>
          
          <button className="mt-6 backdrop-blur-md bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-2xl shadow-xl border border-white/30 transition-all hover:scale-105 flex items-center gap-2 mx-auto">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Join Groups</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Near You to Watch */}
        <div className="lg:col-span-2 backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif text-gray-800">Upcoming Events</h2>
              <span className="text-sm text-indigo-600 font-medium cursor-pointer hover:underline">
                View All
              </span>
            </div>

            <div className="backdrop-blur-md bg-gradient-to-br from-indigo-50/70 to-purple-50/50 rounded-2xl p-5 border border-indigo-200/50 shadow-lg mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 backdrop-blur-md bg-indigo-100/80 rounded-full flex items-center justify-center shadow border border-white/60">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">Virtual Support Circle</h3>
                  <p className="text-xs text-gray-600">Tomorrow at 2:00 PM</p>
                </div>
                <button className="backdrop-blur-md bg-white/70 hover:bg-white/90 p-2 rounded-full shadow border border-white/60 transition-all">
                  <Bell className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Join us for a safe space to share experiences and support each other.
              </p>
            </div>
          </div>
        </div>

        {/* Peer Support Matches */}
        <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl" />
          
          <div className="relative">
            <h2 className="text-lg font-serif text-gray-800 mb-4">Peer Support Matches</h2>
            
            <div className="space-y-3">
              <SupportMatch
                name="Sarah Lim"
                description="Looking for a mentor in stage 2 therapy"
                status="new"
                color="indigo"
              />
              <SupportMatch
                name="David Tan"
                description="Seeking expert nutrition tips"
                status="pending"
                color="purple"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Activities */}
      <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 shadow-xl border border-white/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif text-gray-800">Recommended Activities</h2>
            <span className="text-sm text-purple-600 font-medium cursor-pointer hover:underline">
              Today • 4/4
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ActivityCard
              emoji="🧘‍♀️"
              title="Gentle Tai Chi"
              description="Join Maria for community breathing exercises and relaxation"
              attendees={12}
              color="indigo"
            />
            <ActivityCard
              emoji="🍎"
              title="Cancer Nutrition Q&A"
              description="Relaxing nutritional video therapy session"
              attendees={24}
              color="purple"
            />
          </div>
        </div>
      </div>

      {/* Community Stories */}
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/70 rounded-3xl p-8 shadow-2xl border border-white/60 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />
        
        <div className="relative">
          <h2 className="text-2xl font-serif text-gray-800 mb-6">Community Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StoryCard
              author="Sarah M."
              title="Finding Strength in Week 5"
              excerpt="I never thought I'd make it this far, but with the support of this community..."
              likes={47}
              comments={12}
            />
            <StoryCard
              author="John D."
              title="Small Victories Matter"
              excerpt="Today I walked for 15 minutes. It might not seem like much, but..."
              likes={63}
              comments={8}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface SupportMatchProps {
  name: string;
  description: string;
  status: 'new' | 'pending';
  color: string;
}

function SupportMatch({ name, description, status, color }: SupportMatchProps) {
  const colorClasses = color === 'indigo'
    ? 'bg-indigo-50/70 border-indigo-200/60'
    : 'bg-purple-50/70 border-purple-200/60';

  const badgeColor = status === 'new' ? 'bg-indigo-500' : 'bg-purple-500';

  return (
    <div className={`backdrop-blur-md ${colorClasses} rounded-2xl p-4 border shadow-lg`}>
      <div className="flex items-start gap-3">
        <div className="relative">
          <div className={`w-10 h-10 backdrop-blur-md ${color === 'indigo' ? 'bg-indigo-100/80' : 'bg-purple-100/80'} rounded-full flex items-center justify-center shadow border border-white/60`}>
            <span className="text-lg font-semibold">{name.charAt(0)}</span>
          </div>
          <div className={`absolute -top-1 -right-1 w-3 h-3 ${badgeColor} rounded-full border-2 border-white`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-800 text-sm mb-0.5">{name}</h4>
          <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
        </div>
        <button className="backdrop-blur-md bg-white/70 hover:bg-white/90 p-2 rounded-lg shadow border border-white/60 transition-all flex-shrink-0">
          <MessageCircle className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

interface ActivityCardProps {
  emoji: string;
  title: string;
  description: string;
  attendees: number;
  color: string;
}

function ActivityCard({ emoji, title, description, attendees, color }: ActivityCardProps) {
  const colorClasses = color === 'indigo'
    ? 'from-indigo-50/80 to-blue-50/60'
    : 'from-purple-50/80 to-pink-50/60';

  return (
    <div className={`backdrop-blur-md bg-gradient-to-br ${colorClasses} rounded-2xl p-5 shadow-lg border border-white/60 hover:scale-[1.02] transition-all cursor-pointer`}>
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Users className="w-4 h-4" />
        <span>{attendees} attending</span>
      </div>
    </div>
  );
}

interface StoryCardProps {
  author: string;
  title: string;
  excerpt: string;
  likes: number;
  comments: number;
}

function StoryCard({ author, title, excerpt, likes, comments }: StoryCardProps) {
  return (
    <div className="backdrop-blur-md bg-white/70 rounded-2xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 backdrop-blur-md bg-gradient-to-br from-indigo-100/70 to-purple-100/50 rounded-full flex items-center justify-center shadow border border-white/60">
          <span className="text-sm font-semibold text-gray-700">{author.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">{author}</h4>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
      </div>
      
      <h3 className="font-serif text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{excerpt}</p>
      
      <div className="flex items-center gap-4 pt-4 border-t border-white/40">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
          <Heart className="w-4 h-4" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span>{comments}</span>
        </button>
      </div>
    </div>
  );
}
