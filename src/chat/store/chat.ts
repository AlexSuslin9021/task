import { createSlice } from "@reduxjs/toolkit";

const appInitialState = {
users:[]
};

const appSlice = createSlice({
    name: "chat",
    initialState: appInitialState,
    reducers: {

    },
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
// export const setAppError = appSlice.actions.setAppError;

// export const setIsLoggedInAC = appSlice.actions.setIsLoggedInAC;
// export const isAppInitializedAC = appSlice.actions.isAppInitializedAC;

// export const setIsLoggedInTC = () => (dispatch: any) => {
//     dispatch(setIsLoggedInAC({ isLoggedIn: false }));
// };