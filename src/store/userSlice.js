import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    fullName: '',
    id: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.fullName = action.payload.fullName;
            state.id = action.payload.id;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.fullName = '';
            state.id = null;
        },
    },
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
