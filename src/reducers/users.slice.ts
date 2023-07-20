import {createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";
const initialState:InitialStatetupe[] = [
    {
        id: 0,
        imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        title: "Пепперони Фреш с перцем",
        types: [0, 1]
    },

];




const slice=createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
             return  action.payload
            })
}});
export const users=slice.reducer

export const getData = createAsyncThunk('getData/getData',(_, thunkAPI)=>{
    axios.get('https://64a3b031c3b509573b56686b.mockapi.io/Items').then((res)=>{
        return res.data
    })
})
export type InitialStatetupe= {
    id: number,
    imageUrl: string,
    title: string,
    types: number[]
}