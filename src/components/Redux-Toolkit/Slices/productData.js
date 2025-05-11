import { createSlice } from "@reduxjs/toolkit";
const productData = createSlice({
  name: "productData",
  initialState: [],
  reducers: {
    setproductData(state, action) {
      return (state = action.payload);
    }
  }
});
export default productData.reducer;
export const {setproductData}=productData.actions;