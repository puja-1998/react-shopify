import { configureStore } from "@reduxjs/toolkit";
import productData from "../Slices/productData";
import userData from "../Slices/userData"
import constUserData from "../Slices/constUserData"
const store=configureStore({
    reducer:{
        productData:productData,
        userData:userData,
        constUserData:constUserData
    }
})
export default store;