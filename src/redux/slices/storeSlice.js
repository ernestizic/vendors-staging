import { createSlice } from '@reduxjs/toolkit';
import { base_url_vendors } from '../../utils/utils';
import axios from 'axios';
import { setAlert } from './alertSlice';

// GET ALL VENDOR STORES
export const getVendorStores = () => async (dispatch, getState) => {
    const {accessToken} = getState().auth
	dispatch(fetchStoresPending());
	try {
		const res = await axios.get(`${base_url_vendors}/store`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			},
		});
		const data = res.data;
        console.log(data)
		dispatch(fetchStoresSuccess(data));
	} catch (err) {
		let error = err.response ? err.response.data.message : err.message
        dispatch(setAlert({message: error}));
		dispatch(fetchStoresFailure(err.response.status));
	}
};

const initialState = {
    isLoading: false,
	stores: [],
    userEmailVerified: false,
};

const storeSlice = createSlice({
	name: 'store',
	initialState,
	reducers: {
		// Get Vendor stores
		fetchStoresPending: (state, action) => {
			return {
				...state,
                isLoading: true
			};
		},
		fetchStoresSuccess: (state, action) => {
			return {
				...state,
                isLoading: false,
                stores: action.payload.data.stores,
                userEmailVerified: true
			};
		},
		fetchStoresFailure: (state, action) => {
            const verified = action.payload === 403 ? false : true
			return {
				...state,
                isLoading: false,
                stores: [],
                userEmailVerified: verified
			};
		},
	},
});

// Actions generated from slice
export const { fetchStoresPending, fetchStoresSuccess, fetchStoresFailure } =
	storeSlice.actions;

export default storeSlice.reducer;
