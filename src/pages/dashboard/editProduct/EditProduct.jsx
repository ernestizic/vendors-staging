import React, { useEffect, useState } from 'react';
import Header from '../../../components/dashboardComponents/header/Header';
// import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from '../../../components/global/inputField/InputField';
import Button from '../../../components/global/button/Button';
import SelectField from '../../../components/global/inputField/SelectField';
import TagInputField from '../../../components/global/inputField/TagInputField';
import TextArea from '../../../components/global/inputField/TextArea';
import GalleryIcon from '../../../assets/icons/gallery-export.svg';
import CloseIcon from '../../../assets/icons/close-square-pink.svg';
import { EditProductContainer, EditProductField } from './EditProductStyle';
import { ImageContainer } from '../products/addProductMethod/singleProduct/SingleProductStyle';
import DeleteModal from '../../../components/dashboardComponents/products/deleteModal/DeleteModal';
import { products } from '../../../utils/products';
import { useParams } from 'react-router-dom';

const categories = ['Skincare', 'Accessories'];

const EditProduct = () => {
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [dragActive, setDragActive] = useState(false);
	const [product, setProduct] = useState({})
	const {product_id} = useParams()

	useEffect(()=> {
		setProduct(products.find(product => product.id === Number(product_id)))
	}, [product_id])


	// convert file to base64
	const toBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);

			return reader;
		});

	// handle drag events
	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			console.log('drag leave');
			setDragActive(false);
		}
	};

	// triggers when file is dropped
	const handleDrop = async (e, setFieldValue) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const base64file = await toBase64(e.dataTransfer.files[0]);
			setFieldValue('product_image', base64file);
		}
	};

	// On image selection
	const onImageChange = async (e, setFieldValue) => {
		const base64file = await toBase64(e.target.files[0]);
		if (e.target.files && e.target.files[0]) {
			setFieldValue('product_image', base64file);
		}
	};
	return (
		<>
			<Header title='Edit product' goBack />

			<EditProductContainer>
				<Formik
					enableReinitialize
					initialValues={{
						product_image: product.avatar || '',
						product_name: product.name || '',
						product_description: product.description || '',
						product_category: product.category || '',
						display_price: product.price || '',
						product_tags: product.tags|| '',
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
						setFieldValue,
						isSubmitting,
						isValid,
						dirty,
					}) => (
						<Form>
							<EditProductField>
								<ImageContainer
									open
									onDragEnter={handleDrag}
									onDragLeave={handleDrag}
									onDragOver={handleDrag}
									onDrop={(e) => handleDrop(e, setFieldValue)}
									dragActive={dragActive}
									isImageAvailable={values.product_image}
								>
									{values.product_image ? (
										// if an image is chosen, return image
										<>
											<button
												className='delete-btn'
												onClick={() => setFieldValue('product_image', '')}
											>
												<img
													src={CloseIcon}
													alt='close'
													width='20px'
													height='20px'
												/>
											</button>
											<img
												src={values.product_image}
												alt='product'
												width='100%'
												height='100%'
												className='product-image'
											/>
										</>
									) : (
										// Else return the empty image container
										<div className='no-image body-xs-medium'>
											<img
												src={GalleryIcon}
												alt='gallery export'
												width='24px'
												height='24px'
											/>

											<label htmlFor='image-file' className='file-upload'>
												<p>
													Drag or drop image here or just click to{' '}
													<span>browse</span> files.
												</p>
											</label>
											<input
												type='file'
												accept='image/jpeg, image/jpg, image/png'
												id='image-file'
												name='product_image'
												onChange={(e) => onImageChange(e, setFieldValue)}
											/>
										</div>
									)}
								</ImageContainer>

								{/* fields container */}
								<div className='fields-container'>
									<InputField
										value={values.product_name}
										name='product_name'
										label='Product name'
										required
									/>
									<TextArea
										value={values.product_description}
										name='product_description'
										label='Product description'
									/>
									<SelectField
										defaultOption={values.product_category}
										name='product_category'
										setFieldValue={setFieldValue}
										label='Select product category'
										fieldData={categories.map((val) => {
											return { name: val };
										})}
										required
									/>
									<InputField
										type='number'
										value={values.display_price}
										name='display_price'
										label='Display price'
										required
									/>
									<TagInputField
										defaultValues={values.product_tags}
										name='product_tags'
										label='Add product tags'
										setFieldValue={setFieldValue}
									/>
								</div>
							</EditProductField>

							<div
								className='flexRow'
								style={{ gap: '24px', marginTop: '48px' }}
							>
								<Button
									className='secondary'
									text='Delete product'
									onClick={() => setShowDeleteModal(true)}
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
			</EditProductContainer>
			
			{/* Delete Modal */}
			{showDeleteModal && <DeleteModal showModal={setShowDeleteModal} />}
		</>
	);
};

export default EditProduct;
