import { Formik, Form } from 'formik';
import React from 'react';
import Button from '../../global/button/Button';
import InputField from '../../global/inputField/InputField';

const PasswordUpdate = () => {
	return (
		<Formik
			initialValues={{
				currentPassword: '',
				newPassword: '',
				confirmPassword: '',
			}}
			// validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
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
				<Form>
					<InputField
                        type="password"
						name='currentPassword'
						label='Current password'
						value={values.currentPassword}
					/>
					<InputField
                        type="password"
						name='newPassword'
						label='New password'
						value={values.newPassword}
					/>
					<InputField 
                        type="password" 
                        name='confirmPassword' 
                        label='Confirm password' 
                        value={values.confirmPassword} 
                    />
					<Button
						width='135px'
						text='Save changes'
						type='submit'
						disabled={!(isValid && dirty)}
						isLoading={isSubmitting}
					/>
				</Form>
			)}
		</Formik>
	);
};

export default PasswordUpdate;
