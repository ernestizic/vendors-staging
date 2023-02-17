import React from 'react';
import styled from 'styled-components';
import Button from '../../components/global/button/Button';
import Logo from '../../assets/icons/logo.svg';

const VerifyEmailContainer = styled.div`
	height: 100vh;
	background: var(--accent_3-primary);
	padding: 20px 0;
	color: #fff;
	.secondary {
		float: right;
		margin-right: 96px;
	}
	@media screen and (max-width: 768px) {
		.secondary {
			float: right;
			margin-right: 16px;
		}
	}
`;

const Content = styled.div`
	clear: both;
	height: max-content;
	position: absolute;
	width: 420px;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	max-width: 100%;
	max-height: 100%;
	overflow: auto;

	.body-sm-regular {
		margin: 16px 0 32px;
	}
	@media screen and (max-width: 768px) {
		padding: 16px;
	}
`;

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
