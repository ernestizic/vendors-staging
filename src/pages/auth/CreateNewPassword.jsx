import React from 'react'
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';

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
							/>
						</form>
					)}
				</Formik>
			</AuthLayout>
    </div>
  )
}

export default CreateNewPassword