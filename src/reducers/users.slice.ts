import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

// 1. Поменяйте местами объявления типа и создание среза
export type InitialStatetupe= {
    id: number,
    imageUrl: string,
    title: string,
    types: number[]
};

const initialState: InitialStatetupe[] = [
    {
        id: 0,
        imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        title: "Пепперони Фреш с перцем",
        types: [0, 1]
    },
];

// 2. Исправьте тип данных в createAsyncThunk
export const getData = createAsyncThunk<InitialStatetupe[], void>('users/getData', async (_, thunkAPI) => {
    try {
        const response = await axios.get('https://64a3b031c3b509573b56686b.mockapi.io/Items');
        return response.data as InitialStatetupe[];
    } catch (error) {
        console.error("Error fetching data:", error);
        return thunkAPI.rejectWithValue(error);
    }
});

const slice=createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getData.fulfilled, (state, action) => {
            console.log(action.payload);
            return action.payload;
        })
    }
});

export const users = slice.reducer;
