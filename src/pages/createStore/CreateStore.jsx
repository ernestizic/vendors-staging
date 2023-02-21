import React from 'react';
import AuthLayout from '../../components/layout/authLayout/AuthLayout';
import InputField from '../../components/global/inputField/InputField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/global/button/Button';
import { CreateStoreContainer } from './CreateStoreStyle';
import SelectField from '../../components/global/inputField/SelectField';
import { currencies } from '../../utils/currencies';

// Form validation
let validationSchema = Yup.object().shape({
	store_name: Yup.string().required('Required'),
	store_url: Yup.string(),
	currency: Yup.string().required('Required'),
});

const CreateStore = () => {
	return (
		<CreateStoreContainer>
			<p className='auth_container body-xs-regular'>
				Signing up as Ajanaku@business.com <span className='body-xs-semibold'>Sign out</span>
			</p>

			<AuthLayout
				title='Setup your store'
				subtext='Please tell us about your store so you can start seling on Giftly.'
			>
				<Formik
					initialValues={{
						store_name: '',
						store_url: '',
						currency: '',
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
                        setFieldValue,
						handleChange,
						handleBlur,
						handleSubmit,
						isValid,
						dirty,
					}) => (
						<form onSubmit={handleSubmit}>
                            <InputField
                                name='store_name'
                                label='Store name'
                                value={values.store_name}
                            />
                            <InputField
                                name='store_url'
                                label='Store URL (Optional)'
                                value={values.store_url}
                            />
							<SelectField
								name='currency'
								label='Default currency'
                                fieldData={currencies.map((val) => {return {"name": val.name, "other": `(${val.cc})`}})}
                                setFieldValue={setFieldValue}
                                defaultOption="Nigerian naira (NGN)"
							/>
                            <span className='currency-info metadata'>This is the default currency for uploading your products.</span>

							<Button
								text='Create store'
								type='submit'
								disabled={!(isValid && dirty)}
							/>
						</form>
					)}
				</Formik>
			</AuthLayout>
		</CreateStoreContainer>
	);
};

export default CreateStore;
