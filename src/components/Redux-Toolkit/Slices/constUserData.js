import { createSlice } from "@reduxjs/toolkit";
const constUserData = createSlice({
  name: "constUserData",
  initialState: [],
  reducers: {
    setconstUserData(state, action) {
      return (state = action.payload);
    }
  }
});
export default constUserData.reducer;
export const {setconstUserData}=constUserData.actions;