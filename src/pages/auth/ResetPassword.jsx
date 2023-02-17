import React from 'react';
import { VerifyEmailContainer, Content } from '../../components/layout/authLayout/AuthLayoutStyle';
import Button from '../../components/global/button/Button';
import Logo from '../../assets/icons/logo.svg';

const ResetPassword = () => {
	return (
		<VerifyEmailContainer>
			<Button className='secondary' text='Go back to site' width='235px' />

			<Content>
				<header className='textCenter title-semi-bold'>
					<img src={Logo} alt='logo' />
					<p>Check your email address</p>
				</header>
				<p className='body-sm-regular textCenter'>
					To reset your password, follow the instructions in the email we just
					sent to <span className='bold'>Ajanakwu@gmail.com</span>. If you can't
					find it, check your spam box.
				</p>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Button text='Resend email' className='text-btn' width='115px' />
				</div>
			</Content>
		</VerifyEmailContainer>
	);
};

export default ResetPassword;
