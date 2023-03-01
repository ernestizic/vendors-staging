import React, {useState} from 'react';
import Header from '../../../../../components/dashboardComponents/header/Header';
import PlusIcon from '../../../../../assets/icons/plus_pink.svg';
import * as Yup from 'yup';
import { FieldArray, Form, Formik } from 'formik';
import Button from '../../../../../components/global/button/Button';
import { useNavigate } from 'react-router-dom';
import { AddProductContainer, SingleProductContainer } from './SingleProductStyle';
import ProductField from './ProductField';

// Form validation
const validationSchema = Yup.object().shape({
    products: Yup.array()
      .of(
        Yup.object().shape({
            product_name: Yup.string().required('Required'),
            product_description: Yup.string(),
            product_category: Yup.string(),
            display_price: Yup.string(),
        })
      )
  });

const SingleProduct = () => {
    const navigate = useNavigate()
    const [openKey, setOpenKey] = useState(0)

    const handleToggle=(key)=> {
        if(key === openKey) {
            setOpenKey(key)
        } else {
            setOpenKey(openKey !== key ? key : null)
        }
    }

    function handleOpenNewForm(val) {
        if(val.length === 1) {
            setOpenKey(1)
        } else {
            setOpenKey(val.length)
        }
    }
	return (
		<>
			<Header
				title='Add products'
				subTitle='Choose method / Add product details'
				goBack
			/>
			<SingleProductContainer>
				<header>
					<p className='body-sm-semibold'>Product details</p>
					<p className='body-xs-regular'>Add product basic product details.</p>
				</header>

				<AddProductContainer>
					<Formik
						initialValues={{
                            products: [
                                {
                                    product_image: '',
                                    product_name: '',
                                    product_description: '',
                                    product_category: '',
                                    display_price: '',
                                    product_tags: ''
                                }
                            ]
						}}
						validationSchema={validationSchema}
						onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
						}}
					>
						{({
							values,
							handleChange,
							// handleBlur,
							// handleSubmit,
							setFieldValue,
							isValid,
							dirty,
						}) => (
							<Form>
                                <FieldArray
                                    name="products"
                                    render={(arrayHelpers) => (
                                        <div>
                                            {values.products && values.products.map((item, idx)=> (
                                                <ProductField
                                                    key={idx}
                                                    index={idx}
                                                    product={item}
                                                    onChange={handleChange}
                                                    setFieldValue={setFieldValue}
                                                    toggle={handleToggle}
                                                    open={openKey === idx}
                                                />
                                            ))}
                                            <Button
                                                text='Add another'
                                                type='button'
                                                className='dashed'
                                                iconLeft={PlusIcon}
                                                onClick={() => {
                                                    handleOpenNewForm(values.products)
                                                    arrayHelpers.push({
                                                        product_image: '',
                                                        product_name: '',
                                                        product_description: '',
                                                        product_category: '',
                                                        display_price: '',
                                                        product_tags: "",
                                                    });								
                                                }}
                                            />
                                        </div>
                                    )}
                                />
								<div className='flexRow' style={{gap: "24px", marginTop: "48px"}}>
									<Button
                                        className="secondary"
										text='Cancel'
										onClick={()=> navigate(-1)}
									/>
									<Button
										text='Save product'
										type='submit'
										disabled={!(isValid && dirty)}
										// isLoading={isLoading}
									/>
								</div>
							</Form>
						)}
					</Formik>
				</AddProductContainer>
			</SingleProductContainer>
		</>
	);
};

export default SingleProduct;
