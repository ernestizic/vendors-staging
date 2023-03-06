import React from 'react';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';
import axios from 'axios';
import { base_url_vendors } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../redux/slices/alertSlice';

// Form validation
let validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email address').required('Required'),
});


const ForgotPassword = () => {
	const dispatch = useDispatch();

	const passwordReset =async(userData, setSubmitting)=> {
		try {
			const res = await axios.post(`${base_url_vendors}/password/reset`, userData);
			const data = res.data;
			console.log(data)
			dispatch(setAlert({
				message: data.message
			}))
			setSubmitting(false)
		} catch (err) {
			let error = err.response ? err.response.data.data.email[0] : err.message;
			console.log(error);
			dispatch(setAlert({
				message: error
			}))
			setSubmitting(false)
		}
	}
	return (
		<div>
			<AuthLayout
				title='Forgot Password'
				subtext='Enter your email address and we will send instructions to reset your password'
			>
				<Formik
					initialValues={{
						email: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						passwordReset(values, setSubmitting)
					}}
				>
					{({
						values,
						handleSubmit,
						isValid,
						dirty,
						isSubmitting
					}) => (
						<form onSubmit={handleSubmit}>
							<InputField
								name='email'
								label='Email address'
								value={values.email}
							/>
							<Button
								text='Send instructions'
								type='submit'
								isLoading={isSubmitting}
								disabled={!(isValid && dirty)}
							/>
						</form>
					)}
				</Formik>
			</AuthLayout>
		</div>
	);
};

export default ForgotPassword;
