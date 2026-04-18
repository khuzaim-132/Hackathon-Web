import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Admin User',
    role: 'Store Owner',
    email: 'admin@luxe.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
    plan: 'Premium Plan'
  },
  team: [
    { id: 1, name: 'Admin User', role: 'Store Owner', email: 'admin@luxe.com', status: 'Active', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Sarah Miller', role: 'Inventory Manager', email: 'sarah@luxe.com', status: 'Online', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, name: 'James Wilson', role: 'Support Agent', email: 'james@luxe.com', status: 'Offline', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop' },
  ],
  settings: {
    twoFactor: true,
    loginAlerts: true,
    sessionMgmt: false,
    orderNotifs: true,
    inventoryAlerts: false,
    marketingEmails: true,
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
      const adminInTeam = state.team.find(t => t.id === 1);
      if (adminInTeam) {
        adminInTeam.name = state.profile.name;
        adminInTeam.email = state.profile.email;
      }
    },
    updateSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
    },
    addTeamMember: (state, action) => {
      state.team.push({ ...action.payload, id: Date.now() });
    },
    removeTeamMember: (state, action) => {
      state.team = state.team.filter(m => m.id !== action.payload);
    }
  },
});

export const { updateProfile, updateSettings, addTeamMember, removeTeamMember } = userSlice.actions;
export default userSlice.reducer;
