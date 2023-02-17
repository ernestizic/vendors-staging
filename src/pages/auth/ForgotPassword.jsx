import React from 'react';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';

// Form validation
let validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email address').required('Required'),
});

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
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isValid,
						dirty,
					}) => (
						<form onSubmit={handleSubmit}>
							<InputField
								name='email'
								label='Email address'
								value={values.email}
							/>
							<Button
								text='Sign in'
								type='submit'
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
