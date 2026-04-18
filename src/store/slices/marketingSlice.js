import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coupons: [
    { id: 1, code: 'LUXE20', discount: 20, type: 'percent', expiry: '2024-12-31', status: 'Active', usage: 142 },
    { id: 2, code: 'FLASH50', discount: 50, type: 'percent', expiry: '2024-10-31', status: 'Active', usage: 89 },
    { id: 3, code: 'WELCOME', discount: 10, type: 'percent', expiry: '2025-01-01', status: 'Inactive', usage: 420 },
  ],
  activeCoupon: null,
};

const marketingSlice = createSlice({
  name: 'marketing',
  initialState,
  reducers: {
    addCoupon: (state, action) => {
      state.coupons.unshift(action.payload);
    },
    deleteCoupon: (state, action) => {
      state.coupons = state.coupons.filter(c => c.id !== action.payload);
    },
    applyCoupon: (state, action) => {
      const coupon = state.coupons.find(c => c.code === action.payload && c.status === 'Active');
      if (coupon) {
        state.activeCoupon = coupon;
      }
    },
    removeActiveCoupon: (state) => {
      state.activeCoupon = null;
    },
  },
});

export const { addCoupon, deleteCoupon, applyCoupon, removeActiveCoupon } = marketingSlice.actions;
export default marketingSlice.reducer;
