import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  Users, 
  Settings, 
  TrendingUp, 
  Star, 
  Clock, 
  Plus, 
  Search, 
  Filter,
  MoreVertical,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeft,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  Trophy,
  Target,
  Edit,
  Trash2,
  Eye,
  Download,
  Calendar,
  Layers,
  Shield,
  Activity,
  BarChart3,
  CheckCircle2,
  Brain,
  Send
} from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial requests and setup real-time listener
  useEffect(() => {
    const fetchRequests = async () => {
      const { data, error } = await supabase
        .from('requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching requests:', error);
        toast.error('Failed to load live requests');
      } else {
        // Map data to match our UI structure if needed
        const mappedData = data.map(r => ({
          ...r,
          date: new Date(r.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          helpers: r.helpers || 0
        }));
        setRequests(mappedData);
      }
      setLoading(false);
    };

    fetchRequests();

    // Setup Realtime Subscription
    const channel = supabase
      .channel('requests_db_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'requests' }, 
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newReq = {
              ...payload.new,
              date: new Date(payload.new.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              helpers: payload.new.helpers || 0
            };
            setRequests(prev => [newReq, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setRequests(prev => prev.map(r => r.id === payload.new.id ? {
              ...payload.new,
              date: new Date(payload.new.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              helpers: payload.new.helpers || 0
            } : r));
          } else if (payload.eventType === 'DELETE') {
            setRequests(prev => prev.filter(r => r.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const [interactions, setInteractions] = useState([
    { id: '#INT-7234', peer: 'Alice Johnson', date: 'Oct 24, 2024', status: 'Connected', topic: 'JavaScript Debugging', email: 'alice@example.com', messages: 12 },
    { id: '#INT-7235', peer: 'Bob Smith', date: 'Oct 24, 2024', status: 'Pending', topic: 'Figma Review', email: 'bob@example.com', messages: 0 },
    { id: '#INT-7236', peer: 'Charlie Davis', date: 'Oct 23, 2024', status: 'Solved', topic: 'CSS Grid Layout', email: 'charlie@example.com', messages: 24 },
    { id: '#INT-7237', peer: 'Diana Prince', date: 'Oct 23, 2024', status: 'Active', topic: 'Career Path Talk', email: 'diana@example.com', messages: 8 },
    { id: '#INT-7238', peer: 'Evan Wright', date: 'Oct 25, 2024', status: 'Connected', topic: 'React Hooks', email: 'evan@example.com', messages: 4 },
    { id: '#INT-7239', peer: 'Fiona Glen', date: 'Oct 25, 2024', status: 'Pending', topic: 'Logo Design', email: 'fiona@example.com', messages: 0 },
  ]);

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [editingRequest, setEditingRequest] = useState(null);
  const [showInteractionModal, setShowInteractionModal] = useState(false);
  const [selectedInteraction, setSelectedInteraction] = useState(null);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [showMentorshipModal, setShowMentorshipModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  
  const [newRequest, setNewRequest] = useState({
    title: '',
    category: 'Web Development',
    urgency: 'Medium',
    description: '',
    tags: ''
  });

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New response to your JS request', time: '5m ago', type: 'message', read: false },
    { id: 2, title: 'Badge Unlocked: Quick Helper', time: '1h ago', type: 'achievement', read: false },
    { id: 3, title: 'Weekly study summary ready', time: '2h ago', type: 'system', read: true },
  ]);

  const [peers, setPeers] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', solved: 12, points: 2450, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', solved: 5, points: 840, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', solved: 8, points: 1200, status: 'Offline', avatar: 'https://i.pravatar.cc/150?u=charlie' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', solved: 20, points: 5600, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=diana' },
    { id: 5, name: 'Evan Wright', email: 'evan@example.com', solved: 15, points: 3100, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=evan' },
    { id: 6, name: 'Fiona Glen', email: 'fiona@example.com', solved: 3, points: 450, status: 'Offline', avatar: 'https://i.pravatar.cc/150?u=fiona' },
    { id: 7, name: 'George Hill', email: 'george@example.com', solved: 25, points: 7200, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=george' },
    { id: 8, name: 'Hannah Abbott', email: 'hannah@example.com', solved: 10, points: 1900, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=hannah' },
  ]);

  const [studyTime, setStudyTime] = useState(124);
  const [chatMessages, setChatMessages] = useState([]);
  const [msgInput, setMsgInput] = useState('');
  const [showNotifDropdown, setShowNotifDropdown] = useState(false);
  
  // Initialize dummy messages when interaction is selected
  useEffect(() => {
    if (selectedInteraction) {
      if (selectedInteraction.messages > 0) {
        setChatMessages([
          { id: 1, sender: selectedInteraction.peer, text: `Hey! I saw your request about ${selectedInteraction.topic}. I've had some experience with this recently and would love to help out.`, time: '10:24 AM', isMe: false },
          { id: 2, sender: 'Me', text: "That would be awesome! I'm specifically struggling with the implementation details. When are you free to hop on a quick call?", time: '10:26 AM', isMe: true },
          { id: 3, sender: selectedInteraction.peer, text: "I'm free this afternoon around 4 PM. Does that work for you?", time: '10:30 AM', isMe: false },
        ]);
      } else {
        setChatMessages([]);
      }
    }
  }, [selectedInteraction]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!msgInput.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'Me',
      text: msgInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setChatMessages([...chatMessages, newMsg]);
    setMsgInput('');
  };

  const startPeerConversation = (peer) => {
    const existing = interactions.find(i => i.email === peer.email);
    if (existing) {
      setSelectedInteraction(existing);
    } else {
      setSelectedInteraction({
        id: `NEW-${peer.id}`,
        peer: peer.name,
        email: peer.email,
        topic: 'General Chat',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        messages: 0
      });
    }
    setShowInteractionModal(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStudyTime(prev => Math.max(100, prev + Math.floor(Math.random() * 3) - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { title: 'Solved Requests', value: '42', change: '+12.5%', icon: CheckCircle2, color: 'bg-brand-teal', trend: 'up', tab: 'My Requests' },
    { title: 'Community Points', value: '1,250', change: '+8.2%', icon: Star, color: 'bg-brand-orange', trend: 'up', tab: 'Reputation' },
    { title: 'Helpful Peers', value: '89', change: '+3.1%', icon: Users, color: 'bg-brand-dark', trend: 'up', tab: 'Community' },
    { title: 'Global Rank', value: 'Top 5%', change: '+5.4%', icon: Trophy, color: 'bg-[#167D75]', trend: 'up', tab: 'Analytics' },
  ];

  const mentors = [
    { name: 'Dr. Sarah Smith', role: 'Lead Mentor', email: 'sarah@helphub.ai', status: 'Online', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'James Wilson', role: 'Senior Developer', email: 'james@helphub.ai', status: 'Online', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Ayesha Khan', role: 'UI/UX Expert', email: 'ayesha@helphub.ai', status: 'Offline', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop' },
    { name: 'Marcus Chen', role: 'Marketing Pro', email: 'marcus@helphub.ai', status: 'Online', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop' },
    { name: 'Elena Rodriguez', role: 'Cloud Architect', email: 'elena@helphub.ai', status: 'Online', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
    { name: 'Samir Gupta', role: 'Data Scientist', email: 'samir@helphub.ai', status: 'Offline', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    if (editingRequest) {
      setRequests(requests.map(r => r.id === editingRequest.id ? editingRequest : r));
      toast.success('Request updated successfully!');
    } else {
      const requestToAdd = {
        ...newRequest,
        id: Date.now(),
        status: 'Open',
        helpers: 0,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      setRequests([requestToAdd, ...requests]);
      toast.success('Help request posted to the community!');
    }
    setShowRequestModal(false);
    setEditingRequest(null);
    setNewRequest({ title: '', category: 'Web Development', urgency: 'Medium', description: '', tags: '' });
  };

  const handleMentorshipRequest = (mentor) => {
    console.log('Requesting mentorship from:', mentor.name);
    setSelectedMentor(mentor);
    setShowMentorshipModal(true);
  };

  const deleteRequest = (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      setRequests(requests.filter(r => r.id !== id));
    }
  };

  const sidebarLinks = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'My Requests', icon: BookOpen },
    { name: 'Interactions', icon: MessageSquare },
    { name: 'Community', icon: Users },
    { name: 'Reputation', icon: Star },
    { name: 'Analytics', icon: Activity },
    { name: 'Mentors', icon: Shield },
    { name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <button onClick={() => { setEditingRequest(null); setShowRequestModal(true); }} className="px-6 py-3 bg-brand-teal text-white font-bold rounded-xl shadow-lg hover:bg-brand-teal/80 transition-all flex items-center gap-2">
                <Plus size={18} /> New Request
              </button>
              <button onClick={() => setActiveTab('Interactions')} className="px-6 py-3 bg-white border border-gray-100 text-brand-dark font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                <MessageSquare size={18} /> View Messages
              </button>
              <button onClick={() => setActiveTab('Analytics')} className="px-6 py-3 bg-white border border-gray-100 text-brand-dark font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                <BarChart3 size={18} /> Study Stats
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer" onClick={() => setActiveTab(stat.tab)}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${stat.color} text-white shadow-lg`}>
                      <stat.icon size={24} />
                    </div>
                    <div className="flex items-center gap-1 text-sm font-bold text-emerald-500">
                      <ArrowUpRight size={16} />
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-gray-400 font-medium text-sm mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold text-brand-dark">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Progress Chart */}
              <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark">Study Progress</h3>
                    <p className="text-sm text-gray-400">Activity signals across the week</p>
                  </div>
                  <div className="flex gap-2">
                    {['W', 'M', 'Y'].map(t => (
                      <button key={t} className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${t === 'W' ? 'bg-brand-teal text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-4 px-4">
                  {[45, 30, 75, 55, 95, 60, 80].map((height, i) => (
                    <div key={i} className="flex-1 bg-slate-50 rounded-2xl relative group overflow-hidden">
                      <div 
                        className="absolute bottom-0 w-full bg-brand-teal rounded-t-2xl transition-all duration-1000 group-hover:bg-brand-teal/70"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {height}m
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 px-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <span key={day} className="text-xs font-bold text-gray-400 uppercase tracking-widest">{day}</span>
                  ))}
                </div>
              </div>

              {/* Interaction Feed */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-brand-dark mb-8">Recent Activities</h3>
                <div className="space-y-6">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="flex gap-4 items-start group">
                      <div className={`p-2 rounded-xl flex-shrink-0 ${
                        notif.type === 'message' ? 'bg-blue-50 text-blue-600' :
                        notif.type === 'achievement' ? 'bg-amber-50 text-amber-600' :
                        'bg-emerald-50 text-emerald-600'
                      }`}>
                        {notif.type === 'message' ? <MessageSquare size={18} /> : 
                         notif.type === 'achievement' ? <Trophy size={18} /> : 
                         <Activity size={18} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold truncate transition-colors ${notif.read ? 'text-slate-400' : 'text-brand-dark group-hover:text-brand-teal'}`}>
                          {notif.title}
                        </p>
                        <p className="text-xs text-gray-400">{notif.time}</p>
                      </div>
                      {!notif.read && <div className="w-2 h-2 bg-brand-teal rounded-full mt-2"></div>}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-4 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-all text-sm">
                  View All Activity
                </button>
              </div>
            </div>

            {/* Top Requests */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-brand-dark">Active Help Requests</h3>
                <button onClick={() => setActiveTab('My Requests')} className="text-sm font-bold text-brand-teal hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {requests.slice(0, 4).map((req) => (
                  <div key={req.id} className="p-5 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-3 hover:bg-white hover:shadow-xl transition-all cursor-pointer group">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest px-2 py-1 bg-brand-teal/10 rounded-lg">{req.category}</span>
                    </div>
                    <p className="font-bold text-brand-dark truncate">{req.title}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock size={12} />
                      <span>{req.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'My Requests':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark">My Study Requests</h2>
                <p className="text-gray-400">Manage your active support needs</p>
              </div>
              <button onClick={() => { setEditingRequest(null); setShowRequestModal(true); }} className="px-8 py-4 bg-brand-dark text-white font-bold rounded-2xl shadow-xl hover:bg-brand-teal transition-all flex items-center gap-2">
                <Plus size={18} /> New Request
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {requests.map((req) => (
                <div key={req.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group relative">
                  <div className="absolute top-6 right-6 flex gap-2">
                    <button onClick={() => { setEditingRequest(req); setShowRequestModal(true); }} className="p-2 text-gray-400 hover:text-brand-teal transition-colors">
                      <Edit size={16} />
                    </button>
                    <button onClick={() => deleteRequest(req.id)} className="p-2 text-gray-400 hover:text-rose-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      req.status === 'Solved' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {req.status}
                    </span>
                    <h4 className="text-xl font-bold text-brand-dark leading-tight">{req.title}</h4>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Users size={14} />
                        <span>{req.helpers} helpers</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${
                        req.urgency === 'High' ? 'text-orange-500' : 'text-gray-400'
                      }`}>
                        {req.urgency} Priority
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Interactions':
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold text-brand-dark">Study Interactions</h2>
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Peer</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Topic</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Messages</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {interactions.map((interaction) => (
                      <tr key={interaction.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center font-bold">
                              {interaction.peer[0]}
                            </div>
                            <div>
                              <p className="font-bold text-brand-dark">{interaction.peer}</p>
                              <p className="text-xs text-gray-400">{interaction.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <p className="font-bold text-brand-dark">{interaction.topic}</p>
                          <p className="text-xs text-gray-400">{interaction.date}</p>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            interaction.status === 'Solved' ? 'bg-emerald-100 text-emerald-600' :
                            interaction.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                            interaction.status === 'Connected' ? 'bg-blue-100 text-blue-600' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {interaction.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 font-black text-brand-dark">{interaction.messages} msg</td>
                        <td className="px-8 py-6 text-right">
                          <button 
                            onClick={() => { setSelectedInteraction(interaction); setShowInteractionModal(true); }}
                            className="p-3 hover:bg-brand-teal hover:text-white rounded-xl text-slate-400 transition-all border border-transparent hover:shadow-lg"
                          >
                            <Eye size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'Community':
        return (
          <div className="space-y-8 animate-in slide-in-from-left-4 duration-500">
            <h2 className="text-3xl font-bold text-brand-dark">Community Peers</h2>
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Student</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Requests Solved</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Points</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {peers.map((peer) => (
                      <tr key={peer.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <img src={peer.avatar} alt="" className="w-12 h-12 rounded-2xl object-cover" />
                            <div>
                              <p className="font-bold text-brand-dark">{peer.name}</p>
                              <p className="text-xs text-gray-400">{peer.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 font-bold text-slate-600">{peer.solved}</td>
                        <td className="px-8 py-6 font-black text-brand-dark">{peer.points}</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            peer.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                          }`}>
                            {peer.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button 
                            onClick={() => startPeerConversation(peer)}
                            className="p-3 bg-slate-50 hover:bg-brand-teal hover:text-white rounded-xl text-slate-400 transition-all"
                          >
                            <MessageSquare size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'Reputation':
        return (
          <div className="space-y-8 animate-in zoom-in-95 duration-500">
            <h2 className="text-3xl font-bold text-brand-dark">Reputation & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-dark p-10 rounded-[3rem] text-white shadow-2xl space-y-8 relative overflow-hidden">
                <div className="relative z-10 space-y-2">
                  <p className="text-brand-teal text-[10px] font-bold uppercase tracking-widest">Total Earned</p>
                  <h3 className="text-5xl font-black">1,250</h3>
                  <p className="text-gray-400 text-sm">Community Points</p>
                </div>
                <button className="w-full py-4 bg-brand-teal text-white font-bold rounded-2xl shadow-lg relative z-10">Claim Weekly Reward</button>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl"></div>
              </div>
              <div className="md:col-span-2 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col justify-center">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Current Rank Progression</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <p className="font-bold text-brand-dark">Gold Contributor</p>
                    <p className="text-xs font-bold text-brand-teal">85% to Platinum</p>
                  </div>
                  <div className="h-4 bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-teal rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-xs text-gray-400">Earn 250 more points to reach Platinum Rank</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Analytics':
        return (
          <div className="space-y-10 animate-in slide-in-from-bottom-8 duration-700">
            {/* Intelligence Header */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="bg-brand-dark p-8 rounded-[2.5rem] text-white shadow-2xl space-y-4 col-span-1 lg:col-span-2 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-teal rounded-lg">
                      <Brain size={20} className="text-white" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-teal">AI Learning Insights</span>
                  </div>
                  <h3 className="text-3xl font-bold leading-tight">Your learning pace is 15% faster than last month.</h3>
                  <p className="text-gray-400 text-sm mt-4">Keep focusing on <span className="text-white font-bold">Web Development</span> to reach Mentor status by November.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl group-hover:bg-brand-teal/20 transition-all duration-700"></div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Average Focus</p>
                <div className="space-y-2">
                  <h4 className="text-4xl font-black text-brand-dark">4.2h</h4>
                  <p className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                    <TrendingUp size={14} /> +30m vs last week
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Helpfulness</p>
                <div className="space-y-2">
                  <h4 className="text-4xl font-black text-brand-dark">92%</h4>
                  <p className="text-xs font-bold text-brand-teal uppercase tracking-widest">Elite Helper</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mastery Grid */}
              <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-brand-dark">Subject Mastery</h3>
                  <Target size={20} className="text-gray-300" />
                </div>
                <div className="space-y-8">
                  {[
                    { label: 'Web Dev', val: 85, color: 'bg-brand-teal' },
                    { label: 'UI/UX', val: 62, color: 'bg-brand-orange' },
                    { label: 'Marketing', val: 45, color: 'bg-indigo-500' },
                    { label: 'Python', val: 30, color: 'bg-brand-dark' }
                  ].map((s) => (
                    <div key={s.label} className="space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                        <span className="text-gray-400">{s.label}</span>
                        <span className="text-brand-dark">{s.val}%</span>
                      </div>
                      <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                        <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Productivity Heatmap Concept */}
              <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-brand-dark">Learning Intensity</h3>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-slate-50 rounded-sm"></span>
                    <span className="w-3 h-3 bg-brand-teal/30 rounded-sm"></span>
                    <span className="w-3 h-3 bg-brand-teal/60 rounded-sm"></span>
                    <span className="w-3 h-3 bg-brand-teal rounded-sm"></span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-3">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-xl transition-all hover:scale-110 cursor-pointer ${
                        Math.random() > 0.7 ? 'bg-brand-teal' : 
                        Math.random() > 0.4 ? 'bg-brand-teal/40' : 
                        Math.random() > 0.2 ? 'bg-brand-teal/10' : 'bg-slate-50'
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pt-4">
                  <span>Past 4 Weeks</span>
                  <span>Today</span>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-brand-teal p-12 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl shadow-brand-teal/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="space-y-4 relative z-10 text-center md:text-left">
                <h3 className="text-4xl font-bold leading-tight">Your knowledge has helped<br />24 other students this week.</h3>
                <p className="text-white/70 font-medium">You are in the top 2% of contributors in the Web Development category.</p>
              </div>
              <div className="flex -space-x-4 relative z-10">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i+20}`} className="w-16 h-16 rounded-full border-4 border-brand-teal shadow-xl" />
                ))}
                <div className="w-16 h-16 rounded-full bg-white text-brand-teal flex items-center justify-center font-bold text-sm border-4 border-brand-teal shadow-xl">
                  +19
                </div>
              </div>
            </div>
          </div>
        );
      case 'Mentors':
        return (
          <div className="space-y-8 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-brand-dark">Active Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map((mentor, i) => (
                <div key={i} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm text-center group">
                  <div className="w-24 h-24 mx-auto rounded-[2rem] overflow-hidden mb-6 ring-8 ring-slate-50 transition-all">
                    <img src={mentor.avatar} alt="" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-1">{mentor.name}</h3>
                  <p className="text-brand-teal font-bold text-xs uppercase tracking-widest mb-6">{mentor.role}</p>
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold text-slate-500">{mentor.status}</span>
                  </div>
                  <button 
                    onClick={() => { setSelectedMentor(mentor); setShowMentorshipModal(true); }}
                    className="w-full py-4 bg-slate-50 text-brand-dark font-bold rounded-2xl hover:bg-brand-dark hover:text-white transition-all"
                  >
                    Request Mentorship
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
            <h2 className="text-3xl font-bold text-brand-dark">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Display Name</label>
                <input type="text" defaultValue="John Student" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none font-bold text-brand-dark" />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] px-1">Email Address</label>
                <input type="email" defaultValue="john@university.edu" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none font-bold text-brand-dark" />
              </div>
            </div>
            <div className="pt-6 border-t border-slate-50">
              <button className="px-10 py-4 bg-brand-dark text-white font-bold rounded-2xl shadow-xl hover:bg-brand-teal transition-all">Save Profile Changes</button>
            </div>
          </div>
        );
      default:
        return <div className="p-20 text-center text-gray-400 font-bold">Module under development...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-32">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-100 transform transition-transform duration-500 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="h-full flex flex-col pt-10 pb-10 px-6">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-4 opacity-50">Student Workspace</p>
              {sidebarLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black transition-all group ${
                    activeTab === link.name 
                      ? 'bg-brand-dark text-white shadow-2xl translate-x-2' 
                      : 'text-slate-400 hover:bg-slate-50 hover:text-brand-teal'
                  }`}
                >
                  <link.icon size={20} className={`${activeTab === link.name ? 'text-brand-teal' : 'group-hover:text-brand-teal'}`} />
                  <span className="text-sm tracking-tight">{link.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <div 
                onClick={() => {
                  toast.success('Logged out successfully');
                  navigate('/');
                }}
                className="p-4 bg-brand-dark rounded-3xl flex items-center gap-3 group cursor-pointer hover:shadow-2xl transition-all"
              >
                <div className="w-10 h-10 bg-brand-teal rounded-xl flex items-center justify-center font-bold text-white">
                  S
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">John Student</p>
                  <p className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">Premium Learner</p>
                </div>
                <LogOut size={16} className="ml-auto text-slate-500 group-hover:text-rose-500 transition-colors" />
              </div>
            </div>
          </div>
        </aside>

        {/* Workspace */}
        <main className="flex-1 flex flex-col px-6 lg:px-12 pb-20 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                <Menu size={20} />
              </button>
              <div>
                <h1 className="text-4xl font-black text-brand-dark tracking-tight">{activeTab}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-md border border-emerald-100">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Active Study Session
                  </span>
                  <p className="text-gray-400 text-xs font-medium">• 124 students online</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 relative">
              <button 
                onClick={() => setShowNotifDropdown(!showNotifDropdown)}
                className="relative p-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:bg-slate-50 transition-all text-brand-dark group"
              >
                <Bell size={22} className="group-hover:rotate-12 transition-transform" />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-brand-teal border-2 border-white rounded-full"></span>
              </button>

              {/* Notification Dropdown */}
              {showNotifDropdown && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifDropdown(false)}></div>
                  <div className="absolute top-full right-0 mt-4 w-80 bg-white rounded-[2rem] border border-gray-100 shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-300">
                    <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                      <h3 className="font-bold text-brand-dark">Notifications</h3>
                      <span className="px-2 py-0.5 bg-brand-teal/10 text-brand-teal text-[10px] font-bold rounded-md uppercase">3 New</span>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div key={notif.id} className="p-6 border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer group">
                          <div className="flex gap-4">
                            <div className={`p-2 rounded-xl h-fit ${
                              notif.type === 'message' ? 'bg-blue-50 text-blue-600' :
                              notif.type === 'achievement' ? 'bg-amber-50 text-amber-600' :
                              'bg-emerald-50 text-emerald-600'
                            }`}>
                              {notif.type === 'message' ? <MessageSquare size={16} /> : 
                               notif.type === 'achievement' ? <Trophy size={16} /> : 
                               <Activity size={16} />}
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className={`text-xs font-bold leading-tight ${notif.read ? 'text-slate-400' : 'text-brand-dark group-hover:text-brand-teal'}`}>
                                {notif.title}
                              </p>
                              <p className="text-[10px] text-gray-400 font-medium">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-4 bg-slate-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-brand-teal transition-colors">
                      View All Alerts
                    </button>
                  </div>
                </>
              )}

              <button onClick={() => setActiveTab('Settings')} className="p-3 bg-brand-dark rounded-2xl shadow-lg hover:bg-brand-teal transition-all text-white active:scale-95">
                <Settings size={22} />
              </button>
            </div>
          </div>

          <div className="max-w-[1600px]">
            {renderContent()}
          </div>
        </main>
      </div>

      <Footer />

      {/* New Request Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-dark/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-brand-dark">{editingRequest ? 'Edit Request' : 'New Help Request'}</h3>
                <button onClick={() => setShowRequestModal(false)} className="p-2 hover:bg-slate-100 rounded-xl text-gray-400 transition-all">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleRequestSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Request Title</label>
                  <input 
                    type="text" required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-teal/5 outline-none transition-all font-bold"
                    value={editingRequest ? editingRequest.title : newRequest.title}
                    onChange={(e) => editingRequest ? setEditingRequest({...editingRequest, title: e.target.value}) : setNewRequest({...newRequest, title: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Category</label>
                    <select
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-teal/5 outline-none transition-all font-bold"
                      value={editingRequest ? editingRequest.category : newRequest.category}
                      onChange={(e) => editingRequest ? setEditingRequest({...editingRequest, category: e.target.value}) : setNewRequest({...newRequest, category: e.target.value})}
                    >
                      <option>Web Development</option>
                      <option>UI/UX Design</option>
                      <option>Digital Marketing</option>
                      <option>Career Guidance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">Urgency</label>
                    <select
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-brand-teal/5 outline-none transition-all font-bold"
                      value={editingRequest ? editingRequest.urgency : newRequest.urgency}
                      onChange={(e) => editingRequest ? setEditingRequest({...editingRequest, urgency: e.target.value}) : setNewRequest({...newRequest, urgency: e.target.value})}
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full py-5 bg-brand-teal text-white font-bold rounded-2xl shadow-xl hover:bg-brand-teal/90 transition-all active:scale-95">
                  {editingRequest ? 'Update Request' : 'Post Help Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Interaction/Message Modal */}
      {showInteractionModal && selectedInteraction && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-dark/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl h-[80vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center font-bold text-xl">
                  {selectedInteraction.peer[0]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark">{selectedInteraction.peer}</h3>
                  <p className="text-xs text-gray-400 font-medium">Discussing: {selectedInteraction.topic}</p>
                </div>
              </div>
              <button onClick={() => setShowInteractionModal(false)} className="p-3 hover:bg-slate-100 rounded-2xl text-gray-400 transition-all">
                <X size={24} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
              <div className="flex justify-center">
                <span className="px-4 py-1.5 bg-white rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100 shadow-sm">
                  Conversation started on {selectedInteraction.date}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex items-start gap-3 max-w-[80%] ${msg.isMe ? 'self-end flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                      msg.isMe ? 'bg-brand-dark text-white' : 'bg-brand-teal/10 text-brand-teal'
                    }`}>
                      {msg.sender[0]}
                    </div>
                    <div className={`p-4 rounded-2xl shadow-sm border border-gray-100 ${
                      msg.isMe ? 'bg-brand-teal text-white rounded-tr-none' : 'bg-white text-brand-dark rounded-tl-none'
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p className={`text-[9px] font-bold mt-2 ${msg.isMe ? 'text-white/50 text-right' : 'text-gray-300'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-8 bg-white border-t border-gray-100">
              <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-[2rem] border border-gray-100 focus-within:border-brand-teal/50 focus-within:ring-4 focus-within:ring-brand-teal/5 transition-all">
                <input 
                  type="text" 
                  value={msgInput}
                  onChange={(e) => setMsgInput(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent px-6 py-3 outline-none text-sm font-bold text-brand-dark"
                />
                <button type="submit" className="w-12 h-12 bg-brand-teal text-white rounded-2xl flex items-center justify-center hover:bg-brand-teal/80 transition-all shadow-lg shadow-brand-teal/20 active:scale-95">
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mentorship Request Modal */}
      {showMentorshipModal && selectedMentor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-dark/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10 text-center space-y-8">
              <div className="relative w-32 h-32 mx-auto">
                <img src={selectedMentor.avatar} className="w-full h-full rounded-[2.5rem] object-cover shadow-xl" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-teal rounded-xl flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <CheckCircle2 size={16} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-brand-dark">Request Mentorship</h3>
                <p className="text-gray-400 font-medium">with <span className="text-brand-teal font-bold">{selectedMentor.name}</span></p>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Professional Bio</p>
                <p className="text-sm text-brand-dark leading-relaxed font-medium">
                  Expert in {selectedMentor.role}. Focuses on helping students bridge the gap between theory and real-world application.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setShowMentorshipModal(false)}
                  className="flex-1 py-5 bg-slate-50 text-gray-500 font-bold rounded-2xl hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    toast.success(`Mentorship request sent to ${selectedMentor.name}!`);
                    setShowMentorshipModal(false);
                  }}
                  className="flex-1 py-5 bg-brand-teal text-white font-bold rounded-2xl shadow-xl shadow-brand-teal/20 hover:bg-brand-teal/90 transition-all active:scale-95"
                >
                  Confirm Request
                </button>
              </div>
              <p className="text-[10px] text-gray-400 font-medium">Mentors typically respond within 24-48 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
