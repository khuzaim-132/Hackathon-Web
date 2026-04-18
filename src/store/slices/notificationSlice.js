import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: 'New order received', time: '5m ago', type: 'order', read: false },
    { id: 2, title: 'Low stock alert: Smart Watch', time: '1h ago', type: 'alert', read: false },
    { id: 3, title: 'Payment of $1,240 confirmed', time: '2h ago', type: 'payment', read: true },
  ],
  unreadCount: 2,
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.items.unshift({
        id: Date.now(),
        read: false,
        time: 'Just now',
        ...action.payload,
      });
      state.unreadCount += 1;
    },
    markAsRead: (state, action) => {
      const notification = state.items.find(n => n.id === action.payload);
      if (notification && !notification.read) {
        notification.read = true;
        state.unreadCount -= 1;
      }
    },
    markAllAsRead: (state) => {
      state.items.forEach(n => n.read = true);
      state.unreadCount = 0;
    },
    clearNotifications: (state) => {
      state.items = [];
      state.unreadCount = 0;
    },
  },
});

export const { addNotification, markAsRead, markAllAsRead, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
