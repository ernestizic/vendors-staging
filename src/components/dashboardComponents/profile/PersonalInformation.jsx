import { Formik, Form } from 'formik';
import React from 'react'
import Button from '../../global/button/Button';
import InputField from '../../global/inputField/InputField';

const PersonalInformation = () => {
  return (
    <Formik
    initialValues={{
        firstname: "",
        lastname: "",
        email: '',
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