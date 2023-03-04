import React from 'react';
import Header from '../../../../../components/dashboardComponents/header/Header';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import InputField from '../../../../../components/global/inputField/InputField';
import Button from '../../../../../components/global/button/Button';
import { useNavigate } from 'react-router-dom';

const LinkProductContainer = styled.div`
	width: 551px;
	padding: 0 0 0 48px;
	header {
		margin-bottom: 32px;
		.body-xs-regular {
			padding-top: 4px;
		}
	}
	@media only screen and (max-width: 768px) {
		padding: 16px;
		width: 100%;
	}
`;

const LinkProduct = () => {
	const navigate = useNavigate();
	// Form validation
	let validationSchema = Yup.object().shape({
		link: Yup.string().url().nullable(),
	});

	return (
		<>
			<Header title='Add products' subTitle='Products / import' goBack />

			<LinkProductContainer>
				<header>
					<p className='body-sm-semibold'>Copy and paste your product link</p>
					<p className='body-xs-regular'>
						Upload products directly from your website by pasting the link to
						the product below.
					</p>
				</header>

				<Formik
					initialValues={{
						link: '',
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting }) => {
						console.log(values);
					}}
				>
					{({ values, handleSubmit, isSubmitting, isValid, dirty }) => (
						<form onSubmit={handleSubmit}>
							<InputField
								name='link'
								label='Product link'
								value={values.link}
							/>
							<div
								className='flexRow'
								style={{ gap: '24px', marginTop: '48px' }}
							>
								<Button
									className='secondary'
									text='Cancel'
									onClick={() => navigate(-1)}
								/>
								<Button
									text='Fetch product'
									type='submit'
									disabled={!(isValid && dirty)}
									// isLoading={isLoading}
								/>
							</div>
						</form>
					)}
				</Formik>
			</LinkProductContainer>
		</>
	);
};

export default LinkProduct;
