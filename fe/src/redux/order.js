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
      const existingOrderItemIndex = state.items.findIndex(
        (item) => item.businessId === itemAdded.businessId
      );

      const existingOrderItem = state.items[existingOrderItemIndex];

      if (!existingOrderItem) {
        state.items.push(itemAdded);
        state.totalAmount += itemAdded.price;
      } else {
        state.error = "Đã có trong giỏ hàng";
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingOrderItemIndex = state.items.findIndex(
        (item) => item.businessId === id
      );

      if (existingOrderItemIndex !== -1) {
        const existingItem = state.items[existingOrderItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        updatedItems = state.items.filter((item) => item.businessId !== id);
        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
      }
    },
    removeError(state) {
      state.error = "";
    },
  },
});

export const orderItemAction = orderSlice.actions;
export default orderSlice.reducer;
