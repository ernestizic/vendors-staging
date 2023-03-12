import React, { useState, useEffect } from 'react';
import Header from '../../../../../components/dashboardComponents/header/Header';
import PlusIcon from '../../../../../assets/icons/plus_pink.svg';
import * as Yup from 'yup';
import { FieldArray, Form, Formik } from 'formik';
import Button from '../../../../../components/global/button/Button';
import { useNavigate } from 'react-router-dom';
import {
	AddProductContainer,
	SingleProductContainer,
} from './SingleProductStyle';
import ProductField from './ProductField';
import axios from 'axios';
import { base_url_vendors } from '../../../../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../../../../redux/slices/alertSlice';

// Form validation
const validationSchema = Yup.object().shape({
	products: Yup.array().of(
		Yup.object().shape({
			product_name: Yup.string().required('Required'),
			product_description: Yup.string(),
			product_category: Yup.string(),
			display_price: Yup.string(),
		})
	),
});

const SingleProduct = () => {
	const [categories, setCategories] = useState([])
	const { currentStore } = useSelector((state) => state.store);
	const { accessToken } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [openKey, setOpenKey] = useState(0);


	const handleToggle = (key) => {
		if (key === openKey) {
			setOpenKey(key);
		} else {
			setOpenKey(openKey !== key ? key : null);
		}
	};

	function handleOpenNewForm(val) {
		if (val.length === 1) {
			setOpenKey(1);
		} else {
			setOpenKey(val.length);
		}
	}

	useEffect(()=> {
		const getProductCategories=async()=> {
			try {
				const res = await axios.get(`https://vendors.giftly.me/api/market/category`, {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				});
				setCategories(res.data.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		getProductCategories()
	}, [accessToken])

	// create product(s)
	const createProduct = async (formData, setSubmitting) => {
		try {
			const res = await axios.post(
				`${base_url_vendors}/store/${currentStore.id}/product`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			);
			const data = res.data;
			console.log(data);
			setSubmitting(false);
			navigate('/products');
		} catch (err) {
			setSubmitting(false);
			let error = err.response
				? err.response.data.data.name ||
				  err.response.data.data.amount ||
				  err.response.data.data.avatar ||
				  err.response.data.data.category_id ||
				  err.response.data.data.purchase_link ||
				  err.response.data.message
				: err.message;
			dispatch(setAlert({ message: error }));
			console.log(err);
		}
	};
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
									product_tags: '',
								},
							],
						}}
						validationSchema={validationSchema}
						onSubmit={(values, { setSubmitting }) => {
							// Uncomment when API is corrected
							// const productData = values.products.map((val, idx) => {
							// 	// get category id from list of categories
							// 	const categoryid = categories.find(item => item.name === val.product_category)?.id
							// 	return {
							// 		name: val.product_name,
							// 		category_id: categoryid,
							// 		store_id: currentStore.id,
							// 		currency: currentStore.currency,
							// 		purchase_link: 'https://test.com',
							// 		avatar: val.product_image,
							// 		amount: val.display_price,
							// 	};
							// });
							// get category id from list of categories
							const categoryid = categories.find(item => item.name === values.products[0].product_category)?.id
							const test = {
								name: values.products[0].product_name,
								category_id: categoryid,
								store_id: currentStore.id,
								currency: currentStore.currency,
								purchase_link: 'https://test.com',
								avatar: values.products[0].product_image,
								amount: values.products[0].display_price,
								description: values.products[0].product_description,
								tags: values.products[0].product_tags,
							};
							console.log(test);
							createProduct(test, setSubmitting);
						}}
					>
						{({
							values,
							handleChange,
							isSubmitting,
							setFieldValue,
							isValid,
							dirty,
						}) => (
							<Form>
								<FieldArray
									name='products'
									render={(arrayHelpers) => (
										<div>
											{values.products &&
												values.products.map((item, idx) => (
													<ProductField
														key={idx}
														index={idx}
														product={item}
														onChange={handleChange}
														setFieldValue={setFieldValue}
														toggle={handleToggle}
														open={openKey === idx}
														categories={categories}
													/>
												))}
											<Button
												text='Add another'
												type='button'
												className='dashed'
												iconLeft={PlusIcon}
												onClick={() => {
													handleOpenNewForm(values.products);
													arrayHelpers.push({
														product_image: '',
														product_name: '',
														product_description: '',
														product_category: '',
														display_price: '',
														product_tags: '',
													});
												}}
											/>
										</div>
									)}
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
										text='Save product'
										type='submit'
										disabled={!(isValid && dirty)}
										isLoading={isSubmitting}
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
