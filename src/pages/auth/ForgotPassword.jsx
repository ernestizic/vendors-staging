import React from 'react';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';
import axios from 'axios';
import { base_url_vendors } from '../../utils/utils';

// Form validation
let validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email address').required('Required'),
});

const passwordReset =async(userData, setSubmitting)=> {
	console.log(userData)
	try {
		const res = await axios.post(`${base_url_vendors}/password/reset`, userData);
		const data = res.data;
		console.log(data)
		setSubmitting(false)
	} catch (err) {
		let error = err.response ? err.response.data : err.message;
		console.log(error);
		setSubmitting(false)
	}
}

const ForgotPassword = () => {
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
