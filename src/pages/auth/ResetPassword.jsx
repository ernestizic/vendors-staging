import React, { useState, useEffect } from 'react';
import Button from '../../components/global/button/Button';
import Logo from '../../assets/icons/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAlert } from '../../redux/slices/alertSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { base_url_vendors } from '../../utils/utils';
import {
	VerifyEmailContainer,
	Content,
} from '../../components/layout/authLayout/AuthLayoutStyle';

const ResetPassword = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const {search} = useLocation();
	const resetCode = new URLSearchParams(search).get('code');
	const email = new URLSearchParams(search).get('email')
	const [isLoading, setIsLoading] = useState();

	useEffect(()=> {
		const validateResetCode =async()=> {
			if(!email && !resetCode) {
				navigate("/forgot-password")
			}

			if(email && resetCode) {
				setIsLoading(true)
				try {
					const res = await axios.post(`${base_url_vendors}/password/reset/validate?email=${email}&code=${resetCode}`);
					setIsLoading(false)
					dispatch(setAlert({ message: res.data.message }));
					navigate(`/create-new-password?email=${email}&code=${resetCode}`)
				} catch (err) {
					let error = err.response ? err.response.data.message : err.message;
					dispatch(setAlert({message: error}))
					setIsLoading(false)
				}
			}
		}
		validateResetCode()
		// eslint-disable-next-line 
	}, [email, resetCode, dispatch])

	// Resend email 
	const resendEmail = async () => {
		const userData = {
			email: email
		}
		try {
			setIsLoading(true);
			const res = await axios.post(`${base_url_vendors}/password/reset`, userData);
			const data = res.data;
			setIsLoading(false);
			dispatch(setAlert({ message: data.message }));
		} catch (err) {
			let error = err.response ? err.response.data.message : err.message;
			dispatch(setAlert({ message: error }));
			navigate("/forgot-password")
			setIsLoading(false);
		}
	};
	return (
		<VerifyEmailContainer>
			<Button
				className='secondary'
				text='Go back to site'
				width='235px'
				onClick={() => navigate('/sign-in')}
			/>

			<Content>
				<header className='textCenter title-semi-bold'>
					<img src={Logo} alt='logo' />
					<p>Check your email address</p>
				</header>
				<p className='body-sm-regular textCenter'>
					To reset your password, follow the instructions in the email we just
					sent to <span className='bold'>{email}</span>. If you can't
					find it, check your spam box.
				</p>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Button 
						text='Resend email' 
						className='text-btn' 
						width='115px' 
						isLoading={isLoading}
						onClick={resendEmail}
					/>
				</div>
			</Content>
		</VerifyEmailContainer>
	);
};

export default ResetPassword;
