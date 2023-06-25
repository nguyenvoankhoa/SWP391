import { createSlice } from "@reduxjs/toolkit";
const initialOrderState = {
  totalAmount: 0,
  items: [],
  error: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    addItem(state, action) {
      const itemAdded = action.payload;
      state.items = [];

      state.items.push(itemAdded);
      state.totalAmount = itemAdded.price;
    },
    removeItem(state) {
      state.totalAmount = 0;
      state.items = [];
    },
    removeError(state) {
      state.error = "";
    },
  },
});

export const orderItemAction = orderSlice.actions;
export default orderSlice.reducer;
