import { Formik, Form } from 'formik';
import React from 'react'
import { useSelector } from 'react-redux';
import Button from '../../global/button/Button';
import InputField from '../../global/inputField/InputField';

const PersonalInformation = () => {
    const {userInfo} = useSelector((state)=> state.auth)
  return (
    <Formik
    enableReinitialize
    initialValues={{
        firstname: userInfo.firstname || "",
        lastname: userInfo.lastname || "",
        email: userInfo.email || '',
    }}
    // validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
        console.log(values)
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
                name='firstname'
                label='First name'
                value={values.firstname}
            />
            <InputField
                name='lastname'
                label='Last name'
                value={values.lastname}
            />
            <InputField
                name='email'
                label='Email address'
                value={values.email}
            />
            <Button
                width="135px"
                text='Save changes'
                type='submit'
                disabled={!(isValid && dirty)}
                isLoading={isSubmitting}
            />
        </Form>
    )}
</Formik>
  )
}

export default PersonalInformation