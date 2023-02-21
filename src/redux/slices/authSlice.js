import { createSlice } from '@reduxjs/toolkit';
import { base_url_vendors } from '../../utils/utils';
import axios from 'axios';

// LOGIN USER
export const login = (userData) => async (dispatch, getState) => {
	console.log(userData)
	dispatch(loginPending());
	try {
		const res = await axios.post(`${base_url_vendors}/login`, userData);
		const data = res.data;
		dispatch(loginSuccess(data));
	} catch (err) {
		let error = err.response ? err.response.data : err.message;
		dispatch(loginFailure());
		console.log(error);
	}
};

const initialState = {
	isLoading: false,
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
		// LOGIN REDUCER
		loginPending: (state, action) => {
			return {
				...state,
				isLoading: true,
			};
		},
		loginSuccess: (state, action) => {
			return {
				...state,
				isLoading: false,
				// userInfo: action.payload,
				// accessToken: action.payload.token,
			};
		},
		loginFailure: (state, action) => {
			return {
				...state,
				isLoading: false,
				userInfo: null,
				accessToken: null,
			};
		},
	},
});

// Actions generated from slice
export const { setToken, setUser, loginFailure, loginPending, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
