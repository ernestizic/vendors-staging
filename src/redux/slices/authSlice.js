import { createSlice } from '@reduxjs/toolkit';
// import { base_url_vendors } from '../../utils/utils';
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
				userInfo: action.payload
			};
		},
		// set token
		setToken: (state, action) => {
			return {
				...state,
				accessToken: action.payload
			};
		},

		// LOGOUT REDUCER
		logout: (state, action) => {
			return {
				...state,
				userInfo: null,
				accessToken: null,
			};
		},
	},
});

// Actions generated from slice
export const {
	setToken,
	setUser,
	logout,
} = authSlice.actions;

export default authSlice.reducer;
