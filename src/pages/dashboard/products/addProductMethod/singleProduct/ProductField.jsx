import React from 'react';
import PropTypes from 'prop-types';
import GalleryIcon from '../../../../../assets/icons/gallery-export.svg';
import CloseIcon from '../../../../../assets/icons/close-square-pink.svg';
import ArrowIcon from '../../../../../assets/icons/arrow-down.svg';
import InputField from '../../../../../components/global/inputField/InputField';
import TagInputField from '../../../../../components/global/inputField/TagInputField';
import SelectField from '../../../../../components/global/inputField/SelectField';
import TextArea from '../../../../../components/global/inputField/TextArea';
import {
	AddProductField,
	ImageContainer,
	HiddenFields,
} from './SingleProductStyle';

const categories = ['Skincare', 'Accessories'];

// convert file to base64
const toBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);

		return reader;
	});

const ProductField = ({
	product,
	onChange,
	index,
	setFieldValue,
	toggle,
	open,
}) => {
	const [dragActive, setDragActive] = React.useState(false);
  
	// handle drag events
	const handleDrag =(e)=> {
	  e.preventDefault();
	  e.stopPropagation();
	  if (e.type === "dragenter" || e.type === "dragover") {
		setDragActive(true);
	  } else if (e.type === "dragleave") {
		console.log("drag leave")
		setDragActive(false);
	  }
	};

	// triggers when file is dropped
	const handleDrop =async(e)=> {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			const base64file = await toBase64(e.dataTransfer.files[0]);
			setFieldValue(`products[${index}].product_image`, base64file);
		}
	};

	// On image selection
	const onImageChange = async (e) => {
		const base64file = await toBase64(e.target.files[0]);
		if (e.target.files && e.target.files[0]) {
			setFieldValue(`products[${index}].product_image`, base64file);
		}
	};

	return (
		<AddProductField onClick={() => toggle(index)} open={open}>
			{!open && (
				<button className='accordion-arrow'>
					<img src={ArrowIcon} alt='arrow' />
				</button>
			)}
			<ImageContainer open={open} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} dragActive={dragActive}>
				{product.product_image ? (
					// if an image is chosen, return image
					<>
						{open && (
							// display the close icon only if the accordion item is open
							<button
								className='delete-btn'
								onClick={() =>
									setFieldValue(`products[${index}].product_image`, '')
								}
							>
								<img src={CloseIcon} alt='close' width='20px' height='20px' />
							</button>
						)}
						<img
							src={product.product_image}
							alt='test'
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

						{open && (
							// display the texts only if the accordion item is open
							<>
								<label htmlFor={`file-${index}`} className='file-upload'>
									<p>
										Drag or drop image here or just click to <span>browse</span>{' '}
										files.
									</p>
								</label>
								<input
									type='file'
									accept='image/jpeg, image/jpg, image/png'
									id={`file-${index}`}
									name={`products[${index}].product_image`}
									onChange={onImageChange}
								/>
							</>
						)}
					</div>
				)}
			</ImageContainer>
            
            {/* fields container */}
			<div>
				<InputField
					value={product.product_name}
					name={`products[${index}].product_name`}
					label='Product name'
					width='500px'
					required
					readonly={!open}
					bg={!open && '#fff'}
				/>
				{open && (
					<HiddenFields>
						<TextArea
							value={product.product_description}
							name={`products[${index}].product_description`}
							label='Product description'
						/>
						<SelectField
							name={`products[${index}].product_category`}
							setFieldValue={setFieldValue}
							label='Select product category'
							fieldData={categories.map((val) => {
								return { name: val };
							})}
							required
						/>
						<InputField
							type='number'
							value={product.display_price}
							name={`products[${index}].display_price`}
							label='Display price'
							width='500px'
							required
						/>
						<TagInputField
							name={`products[${index}].product_tags`}
							label='Add product tags'
							setFieldValue={setFieldValue}
						/>
					</HiddenFields>
				)}
			</div>
		</AddProductField>
	);
};

// PropTypes
ProductField.propTypes = {
	product: PropTypes.object.isRequired,
	onChange: PropTypes.func,
	index: PropTypes.number,
	setFieldValue: PropTypes.func,
	toggle: PropTypes.func,
	open: PropTypes.bool
};


export default ProductField;
