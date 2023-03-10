import React, { useEffect } from 'react';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAlert } from '../../redux/slices/alertSlice';
import { useDispatch } from 'react-redux';
import { base_url_vendors } from '../../utils/utils';
import axios from 'axios';

// Form validation
let validationSchema = Yup.object().shape({
	password: Yup.string()
		.min(8, 'Your password must contain at least 8 characters.')
		.required('Please enter password'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords do not match')
		.required('Field cannot be empty'),
});

const CreateNewPassword = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { search } = useLocation();
	const resetCode = new URLSearchParams(search).get('code');
	const email = new URLSearchParams(search).get('email');

	useEffect(()=> {
		// redirect to forgot password if email or reset code not available
		if(!resetCode || !email) {
			navigate("/forgot-password")
		}
	},[email, resetCode, navigate])


	// reset password
	const resetPassword=async(userData, setSubmitting)=> {
		try {
			const res = await axios.post(`${base_url_vendors}/password/new`, userData);
			setSubmitting(false);
			dispatch(setAlert({ message: res.data.message }));
			navigate("/sign-in")
		} catch (err) {
			setSubmitting(false);
			let error = err.response
			? err.response.data.data.code[0] ||
			  err.response.data.data.email[0] ||
			  err.response.data.data.password[0] ||
			  err.response.data.data.password_confirmation[0]
			: err.message;
			dispatch(setAlert({message: error}))
		}
	}
	return (
		<div>
			<AuthLayout title='Create a new password'>
				<Formik
					initialValues={{
						password: '',
						confirmPassword: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						const userData = {
							email : email,
							code : resetCode,
							password : values.password,
							password_confirmation : values.confirmPassword
						}
						resetPassword(userData, setSubmitting)
					}}
				>
					{({
						values,
						handleSubmit,
						isValid,
						isSubmitting,
						dirty,
					}) => (
						<form onSubmit={handleSubmit}>
							<InputField
								name='password'
								label='Password'
								type='password'
								value={values.password}
							/>
							<InputField
								name='confirmPassword'
								label='Confirm Password'
								type='password'
								value={values.confirmPassword}
							/>

							<Button
								text='Save new password'
								type='submit'
								disabled={!(isValid && dirty)}
								isLoading={isSubmitting}
							/>
						</form>
					)}
				</Formik>
			</AuthLayout>
		</div>
	);
};

export default CreateNewPassword;
