import React from 'react';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';
import { CreateStoreContainer } from './CreateStoreStyle';
import SelectField from '../../components/global/inputField/SelectField';
import { currencies } from '../../utils/currencies';
import axios from 'axios';
import { base_url_vendors } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { setAlert } from '../../redux/slices/alertSlice';
import { useNavigate } from 'react-router-dom';

const CreateStore = () => {
	const navigate = useNavigate()
	const { userInfo, accessToken } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	// Function to create store
	const createStore = async (userData, setSubmitting) => {
		setSubmitting(true);
		try {
			const res = await axios.post(`${base_url_vendors}/store`, userData, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			const data = res.data;
			setAlert({ message: data.message });
			setSubmitting(false);
			navigate("/products")
		} catch (err) {
			let error = err.response
				? err.response.data.data.name[0] ||
				  err.response.data.data.address[0] ||
				  err.response.data.data.store_url[0] ||
				  err.response.data.data.currency[0]
				: err.message;
			dispatch(setAlert({ message: error }));
			setSubmitting(false);
		}
	};

	// Form validation
	let validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Required')
			.min(7, 'Name must be at least 7 characters'),
		store_url: Yup.string().url().nullable().required('Enter store URL'),
		currency: Yup.string().required('Required'),
		address: Yup.string().required('Required'),
	});
	return (
		<CreateStoreContainer>
			<div className='flexRow alignCenter auth_container'>
				<p className='body-xs-regular '>Signing up as {userInfo.email}</p>
				<button type='button' onClick={() => dispatch(logout())}>
					Sign out
				</button>
			</div>

			<AuthLayout
				title='Setup your store'
				subtext='Please tell us about your store so you can start seling on Giftly.'
			>
				<Formik
					initialValues={{
						name: '',
						store_url: '',
						currency: '',
						address: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						const valuesFromBracket = values.currency.match(/\((.*?)\)/)[1];

						const valuesToSubmit = {
							name: values.name,
							store_url: values.store_url,
							currency: valuesFromBracket,
							address: values.address,
						};
						createStore(valuesToSubmit, setSubmitting);
					}}
				>
					{({
						values,
						setFieldValue,
						isSubmitting,
						handleSubmit,
						isValid,
						dirty,
					}) => (
						<form onSubmit={handleSubmit}>
							<InputField name='name' label='Store name' value={values.name} />
							<InputField
								name='store_url'
								label='Store URL (Optional)'
								value={values.store_url}
							/>
							<InputField
								name='address'
								label='Store address'
								value={values.address}
							/>
							<SelectField
								name='currency'
								label='Default currency'
								fieldData={currencies.map((val) => {
									return { name: val.name, other: `(${val.cc})` };
								})}
								setFieldValue={setFieldValue}
								valueToUse='other'
								defaultOption='Nigerian naira (NGN)'
							/>
							<span className='currency-info metadata'>
								This is the default currency for uploading your products.
							</span>

							<Button
								text='Create store'
								type='submit'
								disabled={!(isValid && dirty)}
								isLoading={isSubmitting}
							/>
						</form>
					)}
				</Formik>
			</AuthLayout>
		</CreateStoreContainer>
	);
};

export default CreateStore;
