import { createSlice } from "@reduxjs/toolkit";




const productSlice = createSlice({
    name:"product",
    initialState:{
        item:[],
        toast: false,
    },
  reducers:{
   addproduct:(state , action)=>{
 
   const isExist = state.item.find(item=> item.id === action.payload.id);
   console.log(isExist , 'isExist');
   if(isExist){
    state.toast = true ;
}else{
  state.item.push({...action.payload});
}
   
   },
  },
});


export const {addproduct} = productSlice.actions;
export default productSlice.reducer;