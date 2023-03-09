import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';
import axios from 'axios';
import { base_url_vendors } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../redux/slices/alertSlice';
import { setToken, setUser } from '../../redux/slices/authSlice';

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
	first_name: Yup.string().required('Required'),
	last_name: Yup.string().required('Required'),
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
	password_confirmation: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords do not match')
		.required('Field cannot be empty'),
});

// Signup component
const Signup = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()

	// signup user function
	const signup =async(userData, setSubmitting)=> {
		console.log(userData);
		try {
			const res = await axios.post(`${base_url_vendors}/register`, userData);
			const data = res.data;
			setSubmitting(false)
			console.log(data)
			dispatch(setAlert({ message: data.message }));
			dispatch(setToken(data.data.token))
			dispatch(setUser(data.data.user))
			navigate("/verify")
		} catch (err) {
			let error = err.response ? err.response.data.message : err.message;
			dispatch(setAlert({ message: error }));
			console.log(error);
			setSubmitting(false)
		}
	}
	return (
		<SignupContainer>
			<AuthLayout title='Sign up to Giftly vendors'>
				<Formik
					initialValues={{
						first_name: '',
						last_name: '',
						phone: '',
						email: '',
						password: '',
						password_confirmation: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						signup(values, setSubmitting)
					}}
				>
					{({
						values,
						handleSubmit,
						isSubmitting,
						isValid,
						dirty,
					}) => (
						<form onSubmit={handleSubmit}>
							<div className='flex_field'>
								<InputField
									name='first_name'
									label='First name'
									value={values.first_name}
								/>
								<InputField
									name='last_name'
									label='Last name'
									value={values.last_name}
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
								name='password_confirmation'
								label='Confirm Password'
								type='password'
								value={values.password_confirmation}
							/>

							<Button
								text='Continue'
								type='submit'
								disabled={!(isValid && dirty)}
								isLoading={isSubmitting}
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
