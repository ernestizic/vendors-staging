import React from 'react';
import Header from '../../../../../components/dashboardComponents/header/Header';
import GalleryIcon from '../../../../../assets/icons/gallery-export.svg';
// import CloseIcon from '../../../../../assets/icons/close-square-pink.svg';
import PlusIcon from '../../../../../assets/icons/plus_pink.svg';
import {
	AddProductContainer,
	AddProductField,
	ImageContainer,
	SingleProductContainer,
} from './SingleProductStyle';
import InputField from '../../../../../components/global/inputField/InputField';
import SelectField from '../../../../../components/global/inputField/SelectField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import TextArea from '../../../../../components/global/inputField/TextArea';
import Button from '../../../../../components/global/button/Button';
import { useNavigate } from 'react-router-dom';

const categories = ['Skincare', 'Accessories'];

// Form validation
let validationSchema = Yup.object().shape({
	product_name: Yup.string().email('Invalid email address').required('Required'),
	password: Yup.string()
		.min(8, 'Your password must contain at least 8 characters.')
		.required('Please enter password'),
});

const SingleProduct = () => {
    const navigate = useNavigate()
	return (
		<>
			<Header
				title='Add products'
				subTitle='Choose method / Add product details / Another one'
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
							product_image: '',
							product_name: '',
							product_description: '',
							product_category: '',
							display_price: '',
							tags: "",
						}}
						validationSchema={validationSchema}
						onSubmit={(values) => {
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
							setFieldValue,
							isValid,
							dirty,
						}) => (
							<form onSubmit={handleSubmit}>
								<div>
									<AddProductField>
										<ImageContainer>
											{/* <button>
                                            <img src={CloseIcon} alt="close"  width="20px" height="20px"  />
                                        </button> */}
											{/* <img src={Image} alt="test" width="100%" height="100%" className='product-image'/> */}
											<div className='no-image body-xs-medium'>
												<img
													src={GalleryIcon}
													alt='gallery export'
													width='24px'
													height='24px'
												/>
												<p>
													Drag or drop image here or just click to{' '}
													<span>browse</span> files.
												</p>
											</div>
										</ImageContainer>
										<div>
											<InputField
												value={values.product_name}
												name='product_name'
												label='Product name'
												width='500px'
												required
											/>
											<TextArea
												value={values.product_description}
												name='product_description'
												label='Product description'
											/>
											<SelectField
												name='product_category'
												setFieldValue={setFieldValue}
												label='Select product category'
												fieldData={categories.map((val) => {
													return { name: val };
												})}
												required
											/>
											<InputField
                                                type="number"
												value={values.display_price}
												name='display_price'
												label='Display price'
												width='500px'
												required
											/>
											<InputField
												// value={values.tags}
												name='tags'
												label='Add product tags'
												width='500px'
											/>
										</div>
									</AddProductField>
									<Button
										text='Add another'
										type='button'
										className='dashed'
										iconLeft={PlusIcon}
									/>
								</div>

								<div className='flexRow' style={{gap: "24px", marginTop: "48px"}}>
									<Button
                                        className="secondary"
										text='Cancel'
										type='submit'
										onClick={()=> navigate(-1)}
									/>
									<Button
										text='Save product'
										type='submit'
										disabled={!(isValid && dirty)}
										// isLoading={isLoading}
									/>
								</div>
							</form>
						)}
					</Formik>
				</AddProductContainer>
			</SingleProductContainer>
		</>
	);
};

export default SingleProduct;
