import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  TrendingUp, 
  DollarSign, 
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
  CreditCard,
  Target,
  Edit,
  Trash2,
  Eye,
  Download,
  Calendar,
  Layers,
  Shield,
  Activity,
  BarChart3
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [products, setProducts] = useState(PRODUCTS);
  const [orders, setOrders] = useState([
    { id: '#ORD-7234', customer: 'Alice Johnson', date: 'Oct 24, 2024', status: 'Delivered', amount: 299.99, email: 'alice@example.com', items: 3 },
    { id: '#ORD-7235', customer: 'Bob Smith', date: 'Oct 24, 2024', status: 'Pending', amount: 159.00, email: 'bob@example.com', items: 1 },
    { id: '#ORD-7236', customer: 'Charlie Davis', date: 'Oct 23, 2024', status: 'Shipped', amount: 89.99, email: 'charlie@example.com', items: 2 },
    { id: '#ORD-7237', customer: 'Diana Prince', date: 'Oct 23, 2024', status: 'Processing', amount: 1249.00, email: 'diana@example.com', items: 1 },
    { id: '#ORD-7238', customer: 'Ethan Hunt', date: 'Oct 22, 2024', status: 'Delivered', amount: 129.50, email: 'ethan@example.com', items: 4 },
  ]);

  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState('42850.00');
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    description: '',
    stock: 50
  });

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New order received', time: '5m ago', type: 'order', read: false },
    { id: 2, title: 'Low stock alert: Smart Watch', time: '1h ago', type: 'alert', read: false },
    { id: 3, title: 'Payment of $1,240 confirmed', time: '2h ago', type: 'payment', read: true },
  ]);

  const [customers, setCustomers] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', orders: 12, spent: 2450.00, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', orders: 5, spent: 840.50, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', orders: 8, spent: 1200.00, status: 'Inactive', avatar: 'https://i.pravatar.cc/150?u=charlie' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', orders: 20, spent: 5600.00, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=diana' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', orders: 15, spent: 3100.25, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=ethan' },
  ]);

  const [transactions, setTransactions] = useState([
    { id: 'TXN-9021', method: 'Visa **** 4242', date: 'Oct 24, 2024', amount: 299.99, status: 'Completed', type: 'Income' },
    { id: 'TXN-9022', method: 'PayPal', date: 'Oct 24, 2024', amount: 159.00, status: 'Completed', type: 'Income' },
    { id: 'TXN-9023', method: 'Bank Transfer', date: 'Oct 22, 2024', amount: 5000.00, status: 'Pending', type: 'Withdrawal' },
    { id: 'TXN-9024', method: 'MasterCard **** 8812', date: 'Oct 21, 2024', amount: 89.99, status: 'Completed', type: 'Income' },
  ]);

  const [liveTraffic, setLiveTraffic] = useState(124);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTraffic(prev => Math.max(100, prev + Math.floor(Math.random() * 11) - 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { title: 'Total Revenue', value: '$124,592.00', change: '+12.5%', icon: DollarSign, color: 'bg-emerald-500', trend: 'up', tab: 'Revenue' },
    { title: 'Total Orders', value: '1,248', change: '+8.2%', icon: ShoppingCart, color: 'bg-blue-500', trend: 'up', tab: 'Orders' },
    { title: 'Total Customers', value: '892', change: '+3.1%', icon: Users, color: 'bg-purple-500', trend: 'up', tab: 'Customers' },
    { title: 'Store Growth', value: '24.5%', change: '+5.4%', icon: TrendingUp, color: 'bg-orange-500', trend: 'up', tab: 'Analytics' },
  ];

  const team = [
    { name: 'Admin User', role: 'Store Owner', email: 'admin@luxe.com', status: 'Active', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop' },
    { name: 'Sarah Miller', role: 'Inventory Manager', email: 'sarah@luxe.com', status: 'Online', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop' },
    { name: 'James Wilson', role: 'Support Agent', email: 'james@luxe.com', status: 'Offline', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop' },
  ];

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...editingProduct, price: parseFloat(editingProduct.price) } : p));
      alert('Product updated successfully!');
    } else {
      const productToAdd = {
        ...newProduct,
        id: Math.max(...products.map(p => p.id)) + 1,
        price: parseFloat(newProduct.price)
      };
      setProducts([productToAdd, ...products]);
      alert('Product added successfully!');
    }
    setShowProductModal(false);
    setEditingProduct(null);
    setNewProduct({
      name: '', price: '', category: 'Electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop', description: '', stock: 50
    });
  };

  const deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    setIsWithdrawing(true);
    setTimeout(() => {
      setIsWithdrawing(false);
      setShowWithdrawModal(false);
      alert('Withdrawal request submitted successfully! Funds will arrive in 2-3 business days.');
    }, 2000);
  };

  const sidebarLinks = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Products', icon: Package },
    { name: 'Orders', icon: ShoppingCart },
    { name: 'Customers', icon: Users },
    { name: 'Revenue', icon: DollarSign },
    { name: 'Analytics', icon: Activity },
    { name: 'Payments', icon: CreditCard },
    { name: 'Team', icon: Shield },
    { name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <button onClick={() => { setEditingProduct(null); setShowProductModal(true); }} className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2">
                <Plus size={18} /> New Product
              </button>
              <button onClick={() => setActiveTab('Orders')} className="px-6 py-3 bg-white border border-gray-100 text-slate-900 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                <ShoppingCart size={18} /> Process Orders
              </button>
              <button onClick={() => setActiveTab('Analytics')} className="px-6 py-3 bg-white border border-gray-100 text-slate-900 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                <BarChart3 size={18} /> Daily Report
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
                    <div className={`flex items-center gap-1 text-sm font-bold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                      {stat.change}
                    </div>
                  </div>
                  <h3 className="text-gray-400 font-medium text-sm mb-1">{stat.title}</h3>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sales Chart */}
              <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Revenue Stream</h3>
                    <p className="text-sm text-gray-400">Weekly Performance Analytics</p>
                  </div>
                  <div className="flex gap-2">
                    {['W', 'M', 'Y'].map(t => (
                      <button key={t} className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${t === 'W' ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-4 px-4">
                  {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <div key={i} className="flex-1 bg-slate-50 rounded-2xl relative group overflow-hidden">
                      <div 
                        className="absolute bottom-0 w-full bg-indigo-600 rounded-t-2xl transition-all duration-1000 group-hover:bg-indigo-400"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          ${height * 10}
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

              {/* Activity Feed */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8">Recent Activity</h3>
                <div className="space-y-6">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="flex gap-4 items-start group">
                      <div className={`p-2 rounded-xl flex-shrink-0 ${
                        notif.type === 'order' ? 'bg-blue-50 text-blue-600' :
                        notif.type === 'alert' ? 'bg-rose-50 text-rose-600' :
                        'bg-emerald-50 text-emerald-600'
                      }`}>
                        {notif.type === 'order' ? <ShoppingCart size={18} /> : 
                         notif.type === 'alert' ? <Bell size={18} /> : 
                         <DollarSign size={18} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold truncate transition-colors ${notif.read ? 'text-slate-400' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                          {notif.title}
                        </p>
                        <p className="text-xs text-gray-400">{notif.time}</p>
                      </div>
                      {!notif.read && <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-4 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-all text-sm">
                  Clear All Notifications
                </button>
              </div>
            </div>

            {/* Top Products Grid */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-900">Top Performing Products</h3>
                <button onClick={() => setActiveTab('Products')} className="text-sm font-bold text-indigo-600 hover:underline">View All Inventory</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 4).map((product) => (
                  <div key={product.id} className="p-4 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-4 hover:bg-white hover:shadow-xl transition-all cursor-pointer group">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white">
                      <img src={product.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 truncate">{product.name}</p>
                      <p className="text-xs text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Products':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Product Management</h2>
                <p className="text-gray-400">Inventory Status: <span className="text-emerald-500 font-bold">Optimal</span></p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-4 bg-white border border-gray-100 text-slate-600 font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Download size={18} /> Export
                </button>
                <button onClick={() => { setEditingProduct(null); setShowProductModal(true); }} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-600 transition-all flex items-center gap-2">
                  <Plus size={18} /> New Product
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-4">
              <div className="relative flex-1 group w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-all" size={20} />
                <input 
                  type="text" 
                  placeholder="Filter by product name, category or price..." 
                  className="w-full bg-slate-50 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all outline-none font-medium"
                />
              </div>
              <div className="flex gap-2">
                {['All', 'Electronics', 'Fashion', 'Home'].map(cat => (
                  <button key={cat} className="px-6 py-4 bg-slate-50 text-slate-600 font-bold rounded-xl border border-slate-100 hover:bg-indigo-600 hover:text-white transition-all whitespace-nowrap">
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-slate-50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                      <button onClick={() => { setEditingProduct(product); setShowProductModal(true); }} className="p-3 bg-white text-slate-900 rounded-xl shadow-lg hover:bg-indigo-600 hover:text-white transition-all">
                        <Edit size={18} />
                      </button>
                      <button onClick={() => deleteProduct(product.id)} className="p-3 bg-white text-rose-600 rounded-xl shadow-lg hover:bg-rose-600 hover:text-white transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg ${
                        product.stock < 10 ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'
                      }`}>
                        {product.stock < 10 ? 'Low Stock' : 'In Stock'}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest px-2 py-1 bg-indigo-50 rounded-lg">{product.category}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-4 text-lg leading-tight truncate">{product.name}</h4>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Price</p>
                        <p className="text-xl font-black text-slate-900">${product.price.toFixed(2)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Stock</p>
                        <p className="font-bold text-slate-600">{product.stock} units</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Orders':
        return (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Sales Transactions</h2>
                <p className="text-gray-400">Real-time order tracking and fulfillment</p>
              </div>
              <div className="flex gap-4">
                <div className="p-1 bg-white border border-gray-100 rounded-2xl flex shadow-sm">
                  {['Pending', 'Fulfilled', 'Refunded'].map(s => (
                    <button key={s} className="px-6 py-3 rounded-xl text-sm font-bold text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Items</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Total</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold">
                              {order.customer[0]}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{order.customer}</p>
                              <p className="text-xs text-gray-400">{order.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <p className="font-bold text-slate-900">{order.id}</p>
                          <p className="text-xs text-gray-400">{order.date}</p>
                        </td>
                        <td className="px-8 py-6 font-medium text-slate-600">{order.items} items</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-600' :
                            order.status === 'Pending' ? 'bg-amber-100 text-amber-600' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-600' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 font-black text-slate-900">${order.amount.toFixed(2)}</td>
                        <td className="px-8 py-6 text-right">
                          <button 
                            onClick={() => { setSelectedOrder(order); setShowOrderModal(true); }}
                            className="p-3 hover:bg-indigo-600 hover:text-white rounded-xl text-slate-400 transition-all border border-transparent hover:shadow-lg"
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
      case 'Team':
        return (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Team Management</h2>
                <p className="text-gray-400">Collaboration and permission settings</p>
              </div>
              <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                <Plus size={18} /> Invite Member
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm text-center relative overflow-hidden group">
                  <div className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={20} className="text-slate-400 cursor-pointer hover:text-slate-900" />
                  </div>
                  <div className="w-24 h-24 mx-auto rounded-[2rem] overflow-hidden mb-6 ring-8 ring-slate-50 group-hover:ring-indigo-50 transition-all">
                    <img src={member.avatar} alt="" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">{member.role}</p>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${member.status === 'Active' || member.status === 'Online' ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                      <span className="text-xs font-bold text-slate-600">{member.status}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-400">{member.email}</span>
                  </div>

                  <button className="w-full py-3 border border-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all text-sm">
                    Manage Permissions
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Customers':
        return (
          <div className="space-y-8 animate-in slide-in-from-left-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Customer CRM</h2>
                <p className="text-gray-400">Total Reach: <span className="text-indigo-600 font-bold">{customers.length} verified users</span></p>
              </div>
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-2">
                <Users size={18} /> Segment Users
              </button>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Orders</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Total Spent</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {customers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <img src={customer.avatar} alt="" className="w-12 h-12 rounded-2xl object-cover" />
                            <div>
                              <p className="font-bold text-slate-900">{customer.name}</p>
                              <p className="text-xs text-gray-400">{customer.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <p className="font-bold text-slate-600">{customer.orders} orders</p>
                        </td>
                        <td className="px-8 py-6 font-black text-slate-900">${customer.spent.toFixed(2)}</td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            customer.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'
                          }`}>
                            {customer.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-3 hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 rounded-xl transition-all">
                            <MoreVertical size={20} />
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
      case 'Revenue':
        return (
          <div className="space-y-8 animate-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Financial Reports</h2>
                <p className="text-gray-400">Fiscal year 2024 performance tracking</p>
              </div>
              <div className="flex gap-2">
                <button className="px-6 py-3 bg-white border border-gray-100 text-slate-600 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Calendar size={18} /> Oct 2024
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Available Balance</p>
                  <h3 className="text-4xl font-black mb-8">${parseFloat(withdrawalAmount).toLocaleString()}</h3>
                  <button onClick={() => setShowWithdrawModal(true)} className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg">
                    <DollarSign size={18} /> Withdraw Funds
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="md:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Payout Schedule</h4>
                  <div className="flex items-center gap-6">
                    <div className="text-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <p className="text-[10px] font-bold text-emerald-600 uppercase mb-1">Next Payout</p>
                      <p className="text-xl font-black text-slate-900">Oct 28</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Expected: $12,450.00</p>
                      <p className="text-xs text-gray-400">Processing via Bank Transfer</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block w-32 h-32">
                  <Activity size={128} className="text-indigo-50 opacity-50" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8">Revenue Breakdown</h3>
              <div className="space-y-6">
                {[
                  { label: 'Electronics', amount: '$84,200', percent: 65, color: 'bg-indigo-600' },
                  { label: 'Fashion', amount: '$31,000', percent: 25, color: 'bg-emerald-500' },
                  { label: 'Home Decor', amount: '$9,392', percent: 10, color: 'bg-amber-500' }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <p className="font-bold text-slate-900">{item.label}</p>
                      <p className="text-xs font-bold text-gray-400">{item.amount} ({item.percent}%)</p>
                    </div>
                    <div className="h-3 bg-slate-50 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Analytics':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Live Visitors</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-black text-slate-900">{liveTraffic}</p>
                  <span className="text-emerald-500 text-xs font-bold mb-1 flex items-center gap-1">
                    <TrendingUp size={12} /> +12%
                  </span>
                </div>
                <div className="flex gap-1 mt-4">
                  {[4,7,3,9,5,8,4,6].map((h, i) => (
                    <div key={i} className="flex-1 bg-indigo-50 rounded-sm" style={{ height: `${h * 4}px` }}></div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Conv. Rate</p>
                <p className="text-3xl font-black text-slate-900">3.42%</p>
                <p className="text-xs text-slate-400 mt-1">Average: 2.10%</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Bounce Rate</p>
                <p className="text-3xl font-black text-slate-900">42.1%</p>
                <p className="text-xs text-rose-500 mt-1">-5.2% improvement</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Avg. Session</p>
                <p className="text-3xl font-black text-slate-900">4m 12s</p>
                <p className="text-xs text-slate-400 mt-1">+30s vs last week</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8">Traffic Sources</h3>
                <div className="space-y-4">
                  {[
                    { source: 'Direct', value: '45%', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                    { source: 'Social Media', value: '30%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { source: 'Organic Search', value: '20%', icon: Search, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { source: 'Referral', value: '5%', icon: Layers, color: 'text-amber-600', bg: 'bg-amber-50' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${s.bg} ${s.color}`}>
                          <s.icon size={18} />
                        </div>
                        <p className="font-bold text-slate-900">{s.source}</p>
                      </div>
                      <p className="font-black text-slate-900">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-8">Device Breakdown</h3>
                <div className="h-64 flex items-center justify-center relative">
                  <div className="w-48 h-48 rounded-full border-[1.5rem] border-indigo-600 flex items-center justify-center relative">
                    <div className="absolute inset-0 border-[1.5rem] border-emerald-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}></div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-slate-900">72%</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Mobile</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                    <span className="text-xs font-bold text-slate-600">Mobile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-bold text-slate-600">Desktop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Payments':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Transaction History</h2>
                <p className="text-gray-400">All incoming and outgoing payments</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-4 bg-white border border-gray-100 text-slate-600 font-bold rounded-2xl shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Download size={18} /> Statements
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Transaction ID</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Method</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Type</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Amount</th>
                      <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {transactions.map((txn) => (
                      <tr key={txn.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6 font-bold text-slate-900">{txn.id}</td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                            <CreditCard size={16} className="text-slate-400" />
                            <span className="font-medium text-slate-600">{txn.method}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-slate-500 font-medium">{txn.date}</td>
                        <td className="px-8 py-6">
                          <span className={`font-bold ${txn.type === 'Income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {txn.type}
                          </span>
                        </td>
                        <td className="px-8 py-6 font-black text-slate-900">${txn.amount.toFixed(2)}</td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${txn.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                            <span className="text-xs font-bold text-slate-600">{txn.status}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="space-y-12 animate-in slide-in-from-right-8 duration-700">
            <div className="flex flex-col md:flex-row gap-12">
              <aside className="w-full md:w-64 space-y-2">
                {['Profile', 'Store Settings', 'Security', 'Notifications'].map(item => (
                  <button key={item} className={`w-full text-left px-6 py-4 rounded-2xl font-bold transition-all ${item === 'Profile' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-white hover:text-slate-900'}`}>
                    {item}
                  </button>
                ))}
              </aside>

              <div className="flex-1 space-y-10">
                <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                  <div className="flex items-center gap-8">
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-[2.5rem] overflow-hidden ring-4 ring-indigo-50">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
                      </div>
                      <button className="absolute -bottom-2 -right-2 p-3 bg-slate-900 text-white rounded-2xl shadow-xl hover:bg-indigo-600 transition-all">
                        <Edit size={16} />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">Administrator</h3>
                      <p className="text-gray-400 font-medium">Manage your personal information and preferences</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" defaultValue="Admin User" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" defaultValue="admin@luxe.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-medium" />
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-50 flex justify-end gap-4">
                    <button className="px-8 py-4 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-all">Cancel Changes</button>
                    <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:bg-indigo-700 transition-all shadow-indigo-200">Save Profile</button>
                  </div>
                </section>

                <section className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-8">System Preferences</h4>
                  <div className="space-y-6">
                    {[
                      { label: 'Two-Factor Authentication', desc: 'Add an extra layer of security to your account', enabled: true },
                      { label: 'Order Notifications', desc: 'Get notified via email for every new order', enabled: true },
                      { label: 'Inventory Alerts', desc: 'Notify me when products are low on stock', enabled: false }
                    ].map((s, i) => (
                      <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                        <div>
                          <p className="font-bold text-slate-900">{s.label}</p>
                          <p className="text-sm text-gray-400">{s.desc}</p>
                        </div>
                        <button className={`w-14 h-8 rounded-full transition-all relative ${s.enabled ? 'bg-indigo-600' : 'bg-slate-200'}`}>
                          <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${s.enabled ? 'left-7' : 'left-1 shadow-sm'}`}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
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
      
      <div className="flex-1 flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-100 transform transition-transform duration-500 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="h-full flex flex-col pt-32 pb-10 px-6">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-4 opacity-50">Master Dashboard</p>
              {sidebarLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black transition-all group ${
                    activeTab === link.name 
                      ? 'bg-slate-900 text-white shadow-2xl shadow-slate-200 translate-x-2' 
                      : 'text-slate-400 hover:bg-slate-50 hover:text-indigo-600'
                  }`}
                >
                  <link.icon size={20} className={`${activeTab === link.name ? 'text-indigo-400' : 'group-hover:text-indigo-600'}`} />
                  <span className="text-sm tracking-tight">{link.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <div className="p-4 bg-slate-900 rounded-3xl flex items-center gap-3 group cursor-pointer hover:shadow-2xl hover:shadow-indigo-200 transition-all">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl overflow-hidden flex items-center justify-center font-bold text-white shadow-lg">
                  A
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">Administrator</p>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Premium Plan</p>
                </div>
                <LogOut size={16} className="ml-auto text-slate-500 group-hover:text-rose-500 transition-colors" />
              </div>
            </div>
          </div>
        </aside>

        {/* Workspace */}
        <main className="flex-1 flex flex-col pt-24 lg:pt-32 px-6 lg:px-12 pb-20 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                <Menu size={20} />
              </button>
              <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">{activeTab}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-md border border-emerald-100">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Live System
                  </span>
                  <p className="text-gray-400 text-xs font-medium">• Last sync: Just now</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden xl:flex flex-col items-end pr-6 border-r border-gray-200">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Session Data</p>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">124 active users</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-6 h-6 rounded-full border-2 border-white" />)}
                  </div>
                </div>
              </div>
              <button className="relative p-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:bg-slate-50 transition-all text-slate-600 group">
                <Bell size={22} className="group-hover:rotate-12 transition-transform" />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-indigo-600 border-2 border-white rounded-full"></span>
              </button>
              <button className="p-3 bg-slate-900 rounded-2xl shadow-lg hover:bg-indigo-600 transition-all text-white active:scale-95">
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

      {/* Product Modal (Add/Edit) */}
      {showProductModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-slate-900">{editingProduct ? 'Edit Product' : 'New Product'}</h3>
                <button onClick={() => { setShowProductModal(false); setEditingProduct(null); }} className="p-2 hover:bg-slate-100 rounded-xl text-gray-400 transition-all">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleProductSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Name</label>
                    <input 
                      type="text" required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                      value={editingProduct ? editingProduct.name : newProduct.name}
                      onChange={(e) => editingProduct ? setEditingProduct({...editingProduct, name: e.target.value}) : setNewProduct({...newProduct, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Price ($)</label>
                    <input 
                      type="number" step="0.01" required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                      value={editingProduct ? editingProduct.price : newProduct.price}
                      onChange={(e) => editingProduct ? setEditingProduct({...editingProduct, price: e.target.value}) : setNewProduct({...newProduct, price: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Category</label>
                    <select 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                      value={editingProduct ? editingProduct.category : newProduct.category}
                      onChange={(e) => editingProduct ? setEditingProduct({...editingProduct, category: e.target.value}) : setNewProduct({...newProduct, category: e.target.value})}
                    >
                      <option>Electronics</option><option>Fashion</option><option>Home</option><option>Accessories</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Stock Level</label>
                    <input 
                      type="number" required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                      value={editingProduct ? (editingProduct.stock || 50) : newProduct.stock}
                      onChange={(e) => editingProduct ? setEditingProduct({...editingProduct, stock: parseInt(e.target.value)}) : setNewProduct({...newProduct, stock: parseInt(e.target.value)})}
                    />
                  </div>
                </div>
                <button type="submit" className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 transition-all active:scale-95">
                  {editingProduct ? 'Save Changes' : 'Publish Product'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Order Detail Modal */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Order Details</h3>
                <button onClick={() => setShowOrderModal(false)} className="p-2 hover:bg-slate-100 rounded-xl text-gray-400 transition-all">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Order Status</p>
                    <span className="px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg">{selectedOrder.status}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Transaction ID</p>
                    <p className="font-bold text-slate-900">{selectedOrder.id}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Customer Info</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-indigo-600 font-bold">
                      {selectedOrder.customer[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{selectedOrder.customer}</p>
                      <p className="text-sm text-gray-500">{selectedOrder.email}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-4">
                  <button className="flex-1 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all">Print Invoice</button>
                  <button className="px-8 py-4 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-all">Refund</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Withdraw Funds</h3>
                <button onClick={() => setShowWithdrawModal(false)} className="p-2 hover:bg-slate-100 rounded-xl text-gray-400 transition-all">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleWithdraw} className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 mb-8">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 text-center">Current Balance</p>
                  <p className="text-3xl font-black text-slate-900 text-center">${parseFloat(withdrawalAmount).toLocaleString()}</p>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Amount to Withdraw</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-slate-400">$</span>
                    <input 
                      type="number" required max={withdrawalAmount}
                      className="w-full pl-10 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-bold"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Payout Method</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-bold">
                    <option>Bank Transfer (**** 8812)</option>
                    <option>PayPal (admin@luxe.com)</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isWithdrawing}
                  className={`w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 transition-all active:scale-95 flex items-center justify-center gap-3 ${isWithdrawing ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isWithdrawing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Confirm Withdrawal'
                  )}
                </button>
                <p className="text-[10px] text-gray-400 text-center font-medium px-4">Withdrawals are typically processed within 48-72 hours. Standard transaction fees may apply.</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
