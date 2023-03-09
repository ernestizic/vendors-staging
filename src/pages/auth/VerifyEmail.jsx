import React, { useEffect, useState } from 'react';
import Button from '../../components/global/button/Button';
import Logo from '../../assets/icons/logo.svg';
import { VerifyEmailContainer, Content } from '../../components/layout/authLayout/AuthLayoutStyle';
import { useDispatch, useSelector } from 'react-redux';
import { base_url_vendors } from '../../utils/utils';
import { setAlert } from '../../redux/slices/alertSlice';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const VerifyEmail = () => {
	const { userInfo, accessToken } = useSelector((state) => state.auth);
	const [isLoading, setIsLoading] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {search} = useLocation();
	const isVerificationSuccess = new URLSearchParams(search).get('verified');
	const verificationMessage = new URLSearchParams(search).get('message');

	// Resend email verification
	const resendEmail = async () => {
		try {
			setIsLoading(true)
			const res = await axios.get(`${base_url_vendors}/email/verify/resend`, {
				headers: {
					'Authorization': `Bearer ${accessToken}`,
				},
			});
			const data = res.data;
			setIsLoading(false);
			dispatch(setAlert({ message: data.message }));
		} catch (err) {
			let error = err.response ? err.response.data.message : err.message;
			dispatch(setAlert({ message: error }));
			setIsLoading(false);
		}
	};

	useEffect(()=> {
		const checkVerificationStatus =()=> {
			if(!isVerificationSuccess || !verificationMessage) {
				return
			}
			if(isVerificationSuccess === "true") {
				dispatch(setAlert({message: verificationMessage}))
				navigate("/create-store")
			}
		}
		checkVerificationStatus()
		// eslint-disable-next-line
	}, [isVerificationSuccess, verificationMessage, dispatch])

	return (
		<VerifyEmailContainer>
			<Button 
				onClick={()=> navigate("/")}
				className='secondary' 
				text='Go back to site' 
				width='235px' 
			/>

			<Content>
				<header className='textCenter title-semi-bold'>
					<img src={Logo} alt='logo' />
					<p>Verify email address</p>
				</header>
				<p className='body-sm-regular textCenter'>
					Almost there {userInfo?.firstname}! We have sent a verification email to Signing up as{' '}
					<span className='bold'>{userInfo?.email}</span>. You need tp verify
					your email address to continue on Giftly
				</p>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button 
						isLoading={isLoading}
						onClick={resendEmail}
						text="Resend email" 
						className="text-btn" 
						width="115px" 
					/>
                </div>
			</Content>
		</VerifyEmailContainer>
	);
};

export default VerifyEmail;
