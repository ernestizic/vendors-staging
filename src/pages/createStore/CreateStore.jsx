import React, { useEffect } from 'react';
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



const CreateStore = () => {

	// test to see if get request works
	useEffect(()=> {
		const getStore = async() => {
			const res = await axios.get(`${base_url_vendors}/market`)
			console.log(res.data)
		}
		getStore()
	}, [])

	// Function to create store
	const createStore =async(userData, setSubmitting)=> {
		console.log(userData)
		try {
			const res = await axios.post(`${base_url_vendors}/store`, userData);
			const data = res.data;
			console.log(data)
			setSubmitting(false)
		} catch (err) {
			let error = err.response ? err.response.data : err.message;
			console.log(error);
			setSubmitting(false)
		}
	}
	
	// Form validation
	let validationSchema = Yup.object().shape({
		store_name: Yup.string().required('Required'),
		store_url: Yup.string(),
		currency: Yup.string().required('Required'),
	});
	return (
		<CreateStoreContainer>
			<p className='auth_container body-xs-regular'>
				Signing up as Ajanaku@business.com <span className='body-xs-semibold'>Sign out</span>
			</p>

			<AuthLayout
				title='Setup your store'
				subtext='Please tell us about your store so you can start seling on Giftly.'
			>
				<Formik
					initialValues={{
						store_name: '',
						store_url: '',
						currency: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						createStore(values, setSubmitting)
					}}
				>
					{({
                        values,
						errors,
						touched,
                        setFieldValue,
						handleChange,
						handleBlur,
						handleSubmit,
						isValid,
						dirty,
					}) => (
						<form onSubmit={handleSubmit}>
                            <InputField
                                name='store_name'
                                label='Store name'
                                value={values.store_name}
                            />
                            <InputField
                                name='store_url'
                                label='Store URL (Optional)'
                                value={values.store_url}
                            />
							<SelectField
								name='currency'
								label='Default currency'
                                fieldData={currencies.map((val) => {return {"name": val.name, "other": `(${val.cc})`}})}
                                setFieldValue={setFieldValue}
                                defaultOption="Nigerian naira (NGN)"
							/>
                            <span className='currency-info metadata'>This is the default currency for uploading your products.</span>

							<Button
								text='Create store'
								type='submit'
								disabled={!(isValid && dirty)}
							/>
						</form>
					)}
				</Formik>
			</AuthLayout>
		</CreateStoreContainer>
	);
};

export default CreateStore;
