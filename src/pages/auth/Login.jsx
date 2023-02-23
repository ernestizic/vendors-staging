import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { base_url_vendors } from '../../utils/utils';

const LoginContainer = styled('div')`
	.form-extra {
		margin-top: 16px;
		color: var(--title-active);
	}
	a {
		color: inherit;
	}
    .forgot_password {
        display: block;
        margin: 8px 0 24px;
        color: var(--primary-main)
    }
`;

// Form validation
let validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email address').required('Required'),
	password: Yup.string()
		.min(8, 'Your password must contain at least 8 characters.')
		.required('Please enter password'),
});

const login =async(userData, setSubmitting)=> {
	console.log(userData)
	try {
		const res = await axios.post(`${base_url_vendors}/login`, userData);
		const data = res.data;
		console.log(data)
		setSubmitting(false)
	} catch (err) {
		let error = err.response ? err.response.data : err.message;
		console.log(error);
		setSubmitting(false)
	}
}

const Login = () => {
	const {userInfo, accessToken} = useSelector((state)=> state.auth)
	console.log(userInfo, accessToken)
	return (
		<LoginContainer>
			<AuthLayout title='Sign in to Giftly'>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						login(values, setSubmitting)
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						isValid,
						dirty,
					}) => (
						<form onSubmit={handleSubmit}>
							<InputField
								name='email'
								label='Email address'
								value={values.email}
							/>
							<InputField
								name='password'
								label='Password'
								type='password'
								value={values.password}
							/>
                            <Link to="/forgot-password" className='forgot_password label-text'>Forgot your password?</Link>
							<Button
								text='Sign in'
								type='submit'
								disabled={!(isValid && dirty)}
								isLoading={isSubmitting}
							/>
						</form>
					)}
				</Formik>
                <p className='body-xs-regular form-extra'>
					No account?{' '}
					<span className='body-xs-semibold'><Link to="/sign-up">Sign up</Link></span>
				</p>
			</AuthLayout>
		</LoginContainer>
	);
};

export default Login;
