import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';

const SignupContainer = styled.div`
	.flex_field {
		display: flex;
		gap: 24px;
	}

	.form-extra {
		margin-top: 16px;
		color: var(--title-active)
	}
	a {
		color: inherit;
	}
`;

// phone number regex
const phoneRegex = /^[0-9]*$/;

// Form validation
let validationSchema = Yup.object().shape({
	firstname: Yup.string().required('Required'),
	lastname: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
	password: Yup.string()
		.min(8, 'Your password must contain at least 8 characters.')
		.required('Please enter password'),
	phone: Yup.string()
		.required('Field cannot be empty')
		.min(11, 'Phone number must be 11 digits long')
		.max(11, 'Enter a valid phone number')
		.test('test-name', 'Enter a valid phone number', function (value) {
			let isValidPhone = phoneRegex.test(value);
			if (!isValidPhone) {
				return false;
			}
			return true;
		}),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords do not match')
		.required('Field cannot be empty'),
});

const Signup = () => {
	return (
		<SignupContainer>
			<AuthLayout title='Sign up to Giftly vendors'>
				<Formik
					initialValues={{
						firstname: '',
						lastname: '',
						phone: '',
						email: '',
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
							<div className='flex_field'>
								<InputField
									name='firstname'
									label='First name'
									value={values.firstname}
								/>
								<InputField
									name='lastname'
									label='Last name'
									value={values.lastname}
								/>
							</div>
							<InputField
								name='email'
								label='Email address'
								value={values.email}
							/>
							<InputField
								name='phone'
								label='Phone number'
								value={values.phone}
							/>
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
								text='Continue'
								type='submit'
								disabled={!(isValid && dirty)}
							/>
						</form>
					)}
				</Formik>
				<p className='body-xs-regular form-extra'>
					Already have an account?{' '}
					<span className='body-xs-semibold'><Link to="/sign-in">Sign in</Link></span>
				</p>
			</AuthLayout>
		</SignupContainer>
	);
};

export default Signup;
