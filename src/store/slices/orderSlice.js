import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '#ORD-7234', customer: 'Alice Johnson', date: 'Oct 24, 2024', status: 'Delivered', amount: 299.99, email: 'alice@example.com', items: 3 },
    { id: '#ORD-7235', customer: 'Bob Smith', date: 'Oct 24, 2024', status: 'Pending', amount: 159.00, email: 'bob@example.com', items: 1 },
    { id: '#ORD-7236', customer: 'Charlie Davis', date: 'Oct 23, 2024', status: 'Shipped', amount: 89.99, email: 'charlie@example.com', items: 2 },
    { id: '#ORD-7237', customer: 'Diana Prince', date: 'Oct 23, 2024', status: 'Processing', amount: 1249.00, email: 'diana@example.com', items: 1 },
    { id: '#ORD-7238', customer: 'Ethan Hunt', date: 'Oct 22, 2024', status: 'Delivered', amount: 129.50, email: 'ethan@example.com', items: 4 },
  ],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.items.unshift(action.payload);
    },
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;
      const order = state.items.find(o => o.id === id);
      if (order) {
        order.status = status;
      }
    },
  },
});

export const { addOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
