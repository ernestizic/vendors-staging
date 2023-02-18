import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
	accessToken: null,
	userInfo: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// set user
		setUser: (state, action) => {
			return {
				...state,
			};
		},
        // set token
		setToken: (state, action) => {
			return {
				...state,
			};
		},
	},
});

// Actions generated from slice
export const {
    setToken,
    setUser,
} = authSlice.actions;

export default authSlice.reducer;