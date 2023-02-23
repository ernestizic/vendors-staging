import { createSlice } from '@reduxjs/toolkit';
import { base_url_vendors } from '../../utils/utils';
import axios from 'axios';

// Sign up USER
export const signup = (userData) => async (dispatch, getState) => {
	console.log(userData);
	dispatch(registerPending());
	try {
		const res = await axios.post(`${base_url_vendors}/register`, userData);
		const data = res.data;
		dispatch(registerSuccess(data));
	} catch (err) {
		let error = err.response ? err.response.data : err.message;
		dispatch(registerFailure());
		console.log(error);
	}
};

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

		// REGISTER REDUCER
		registerPending: (state, action) => {
			return {
				...state,
				isLoading: true,
			};
		},
		registerSuccess: (state, action) => {
			return {
				...state,
				isLoading: false,
				// userInfo: action.payload,
				// accessToken: action.payload.token,
			};
		},
		registerFailure: (state, action) => {
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
export const {
	setToken,
	setUser,
	registerPending,
	registerSuccess,
	registerFailure,
} = authSlice.actions;

export default authSlice.reducer;
