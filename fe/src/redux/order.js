import { createSlice } from "@reduxjs/toolkit";

const initialOrderState = { totalAmount: 0, items: [], date: "", payment: "" };

const orderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    addItem(state, action) {
      const itemAdded = action.payload;
      state.date = itemAdded.date;
      state.payment = itemAdded.payment;
      state.totalAmount += itemAdded.price;
      const existingOrderItemIndex = state.items.findIndex(
        (item) => item.id === itemAdded.id
      );

      const existingOrderItem = state.items[existingOrderItemIndex];

      if (existingOrderItem) {
        const updatedItem = {
          ...existingOrderItem,
        };
        state.items[existingOrderItemIndex] = updatedItem;
      } else {
        state.items.push(itemAdded);
      }
    },
    // removeItem(state, action) {
    //   const existingOrderItemIndex = state.items.findIndex(
    //     (item) => item.id === action.payload
    //   );

    //   if (existingOrderItemIndex !== -1) {
    //     const existingItem = state.items[existingOrderItemIndex];
    //     state.quantity -= 1;
    //     const updatedTotalAmount = state.totalAmount - existingItem.price;
    //     let updatedItems;

    //     if (existingItem.amount === 1) {
    //       updatedItems = state.items.filter(
    //         (item) => item.id !== action.payload
    //       );
    //     } else {
    //       const updatedItem = {
    //         ...existingItem,
    //         amount: existingItem.amount - 1,
    //       };
    //       updatedItems = [...state.items];
    //       updatedItems[existingOrderItemIndex] = updatedItem;
    //     }

    //     state.items = updatedItems;
    //     state.totalAmount = updatedTotalAmount;
    //   }
    // },
  },
});

export const orderItemAction = orderSlice.actions;
export default orderSlice.reducer;
