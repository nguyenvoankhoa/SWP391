import { createSlice } from "@reduxjs/toolkit";
const initialOrderState = {
  totalAmount: 0,
  items: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    addItem(state, action) {
      const itemAdded = action.payload;
      console.log(itemAdded);
      state.totalAmount += itemAdded.price * itemAdded.quantity;
      const existingOrderItemIndex = state.items.findIndex(
        (item) => item.businessId === itemAdded.businessId
      );

      const existingOrderItem = state.items[existingOrderItemIndex];

      if (existingOrderItem) {
        const updatedItem = {
          ...existingOrderItem,
          quantity: existingOrderItem.quantity + itemAdded.quantity,
        };
        state.items[existingOrderItemIndex] = updatedItem;
      } else {
        state.items.push(itemAdded);
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingOrderItemIndex = state.items.findIndex(
        (item) => item.businessId === id
      );

      if (existingOrderItemIndex !== -1) {
        const existingItem = state.items[existingOrderItemIndex];
        state.quantity -= 1;
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.quantity === 1) {
          updatedItems = state.items.filter((item) => item.businessId !== id);
        } else {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };
          updatedItems = [...state.items];
          updatedItems[existingOrderItemIndex] = updatedItem;
        }

        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
      }
    },
  },
});

export const orderItemAction = orderSlice.actions;
export default orderSlice.reducer;
