import {createSlice} from "@reduxjs/toolkit";
const initialState:InitialStatetupe[] = [
    {
        id: 1,
        firstName: 'Иван',
        lastName: 'Иванов',
        age: 30,
    },
    {
        id: 2,
        firstName: 'Мария',
        lastName: 'Смирнова',
        age: 25,
    },
    {
        id: 3,
        firstName: 'Петр',
        lastName: 'Козлов',
        age: 40,
    },
    {
        id: 4,
        firstName: 'Елена',
        lastName: 'Петрова',
        age: 28,
    },
    {
        id: 5,
        firstName: 'Александр',
        lastName: 'Морозов',
        age: 22,
    },
    {
        id: 6,
        firstName: 'Ольга',
        lastName: 'Волкова',
        age: 35,
    },
    {
        id: 7,
        firstName: 'Сергей',
        lastName: 'Лебедев',
        age: 33,
    },
    {
        id: 8,
        firstName: 'Анна',
        lastName: 'Соколова',
        age: 29,
    },
    {
        id: 9,
        firstName: 'Дмитрий',
        lastName: 'Васильев',
        age: 31,
    },
    {
        id: 10,
        firstName: 'Екатерина',
        lastName: 'Павлова',
        age: 27,
    },
    // Добавьте остальных пользователей здесь
    // ...
];




const slice=createSlice({
    name:'users',
    initialState,
    reducers:{

    },
})
export const users=slice.reducer

export type InitialStatetupe= {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
}