import React from 'react';
import styled from 'styled-components';
import EmptyStateImg from '../../assets/images/no-product.svg';
import PlusIcon from '../../assets/icons/plus_white.svg';
import Button from '../../components/global/button/Button';
import { useNavigate } from 'react-router-dom';

const NoProduct = styled.div`
	max-width: 500px;
	margin: auto;
	text-align: center;
	.header-text {
		margin: 24px 0 8px;
	}
	p {
		margin-bottom: 24px;
	}
	button {
		margin-bottom: 50px;
	}
	@media screen and (max-width: 768px) {
		min-width: 90%;
	}
`;

const EmptyState = () => {
	const navigate = useNavigate();
	return (
		<NoProduct>
			<img src={EmptyStateImg} alt='girl in cart' />
			<p className='title-bold header-text'>
				One final step! Add your first product.
			</p>
			<p className='body-sm-regular colorBody'>
				It’s super easy to set up and takes just minutes to get started. Click
				the button below to add your first product.
			</p>
			<Button
				text='Add product'
				iconLeft={PlusIcon}
				width='200px'
				className='auto'
				onClick={() => navigate('/add-product')}
			/>
		</NoProduct>
	);
};

export default EmptyState;
