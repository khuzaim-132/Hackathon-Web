import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', orders: 12, spent: 2450.00, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=alice' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', orders: 5, spent: 840.50, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=bob' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', orders: 8, spent: 1200.00, status: 'Inactive', avatar: 'https://i.pravatar.cc/150?u=charlie' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', orders: 20, spent: 5600.00, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=diana' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', orders: 15, spent: 3100.25, status: 'Active', avatar: 'https://i.pravatar.cc/150?u=ethan' },
  ]
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      const existing = state.items.find(c => c.email === action.payload.email);
      if (existing) {
        existing.orders += 1;
        existing.spent += action.payload.spent;
      } else {
        state.items.unshift({
          ...action.payload,
          id: Date.now(),
          orders: 1,
          status: 'Active',
          avatar: `https://i.pravatar.cc/150?u=${action.payload.email}`
        });
      }
    },
    updateCustomer: (state, action) => {
      const index = state.items.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    deleteCustomer: (state, action) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    }
  },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
