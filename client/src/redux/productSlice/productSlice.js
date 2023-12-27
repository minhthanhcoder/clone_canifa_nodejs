import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "products",
    initialState:{
        productView:"",
    },
    reducers: {
        productView: (state, action) => {
            return state = {
                ...state, 
                productView: action.payload
            }
        }
    }
})