import React from 'react';
import Button from '../../components/global/button/Button';
import Logo from '../../assets/icons/logo.svg';
import { VerifyEmailContainer, Content } from '../../components/layout/authLayout/AuthLayoutStyle';


const VerifyEmail = () => {
	return (
		<VerifyEmailContainer>
			<Button className='secondary' text='Go back to site' width='235px' />

			<Content>
				<header className='textCenter title-semi-bold'>
					<img src={Logo} alt='logo' />
					<p>Verify email address</p>
				</header>
				<p className='body-sm-regular textCenter'>
					Almost there John! We have sent a verification email to Signing up as{' '}
					<span className='bold'>Ajanakwu@gmail.com</span>. You need tp verify
					your email address to continue on Giftly
				</p>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button text="Resend email" className="text-btn" width="115px" />
                </div>
			</Content>
		</VerifyEmailContainer>
	);
};

export default VerifyEmail;
