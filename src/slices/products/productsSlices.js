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
        state.items.push({ ...action.payload, quantity:1 });
      }
    },
    increaseQuantity : (state, action) =>{
      const product = state.items.find((item) => item.id === action.payload.id);
      if(product){
        product.quantity += 1 ;
      }
    },
     decreaseQuantity: (state, action) =>{
      const product = state.items.find((item) => item.id === action.payload.id);
      if(product && product.quantity>1) {
        product.quantity -= 1 ;
        
      }else{
        state.items = state.items.filter(item=> item.id !== action.payload.id);
      }
    },
  },
});

export const { addproduct , increaseQuantity , decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;
