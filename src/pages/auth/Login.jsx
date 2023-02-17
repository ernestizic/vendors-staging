import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';

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

const Login = () => {
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
