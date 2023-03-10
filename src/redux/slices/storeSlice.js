import { createSlice } from '@reduxjs/toolkit';
import { base_url_vendors } from '../../utils/utils';
import axios from 'axios';
import { setAlert } from './alertSlice';

// GET ALL VENDOR STORES
export const getVendorStores = (initialLoad) => async (dispatch, getState) => {
	const { accessToken } = getState().auth;
	dispatch(fetchStoresPending());
	try {
		const res = await axios.get(`${base_url_vendors}/store`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		const data = res.data;
		dispatch(fetchStoresSuccess(data));
		initialLoad && dispatch(getSingleStore(data.data.stores.at(-1).id))
	} catch (err) {
		let error = err.response ? err.response.data.message : err.message;
		dispatch(setAlert({ message: "No store found!" }));
		dispatch(fetchStoresFailure(error));
	}
};

// Get Single Store
export const getSingleStore = (storeId) => async (dispatch, getState) => {
	const { accessToken } = getState().auth;
	dispatch(fetchSingleStorePending());
	try {
		const res = await axios.get(`${base_url_vendors}/store/${storeId}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		const data = res.data;
		dispatch(fetchSingleStoreSuccess(data.data));
	} catch (err) {
		let error = err.response ? err.response.data.message : err.message;
		dispatch(setAlert({ message: error }));
		dispatch(fetchSingleStoreFailure(err.response.status));
	}
};

const initialState = {
	isLoading: false,
	currentStore: {},
	stores: [],
	error: null
};

const storeSlice = createSlice({
	name: 'store',
	initialState,
	reducers: {
		//set current store
		setCurrentStore: (state, action) => {
			return {
				...state,
				currentStore: action.payload,
			};
		},
		// Get Vendor stores
		fetchStoresPending: (state, action) => {
			return {
				...state,
				isLoading: true,
			};
		},
		fetchStoresSuccess: (state, action) => {
			return {
				...state,
				isLoading: false,
				stores: action.payload.data.stores,
			};
		},
		fetchStoresFailure: (state, action) => {
			return {
				...state,
				isLoading: false,
				stores: [],
				error: action.payload
			};
		},

		// Get store
		fetchSingleStorePending: (state, action) => {
			return {
				...state,
				isLoading: true,
			};
		},
		fetchSingleStoreSuccess: (state, action) => {
			return {
				...state,
				isLoading: false,
				currentStore: action.payload,
			};
		},
		fetchSingleStoreFailure: (state, action) => {
			return {
				...state,
				isLoading: false,
				currentStore: {},
			};
		},
	},
});

// Actions generated from slice
export const {
	fetchStoresPending,
	fetchStoresSuccess,
	fetchStoresFailure,
	setCurrentStore,
	fetchSingleStorePending,
	fetchSingleStoreSuccess,
	fetchSingleStoreFailure,
} = storeSlice.actions;

export default storeSlice.reducer;
