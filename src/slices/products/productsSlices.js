import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    isToast: false,
  },
  reducers: {
    addproduct: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      console.log(isExist, "isExist");
      if (isExist) {
        state.isToast = true;
      } else {
        state.items.push({ ...action.payload });
      }
    },
  },
});

export const { addproduct } = productSlice.actions;
export default productSlice.reducer;
