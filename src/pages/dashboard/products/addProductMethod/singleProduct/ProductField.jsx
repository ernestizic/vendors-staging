import React from 'react';
import GalleryIcon from '../../../../../assets/icons/gallery-export.svg';
// import CloseIcon from '../../../../../assets/icons/close-square-pink.svg';
import ArrowIcon from '../../../../../assets/icons/arrow-down.svg';
// import Image from '../../../../../assets/images/test.png';
import { AddProductField, ImageContainer, HiddenFields } from './SingleProductStyle';
import InputField from '../../../../../components/global/inputField/InputField';
import SelectField from '../../../../../components/global/inputField/SelectField';
import TextArea from '../../../../../components/global/inputField/TextArea';

const categories = ['Skincare', 'Accessories'];

const ProductField = ({ product, onChange, index, setFieldValue, toggle, open }) => {

	return (
		<AddProductField onClick={()=> toggle(index)} open={open}>
            {!open && (
                <button className='accordion-arrow'>
                    <img src={ArrowIcon} alt="arrow"/>
                </button>
            )}
			<ImageContainer open={open}>
                {/* {open && (
                    <button>
                        <img src={CloseIcon} alt='close' width='20px' height='20px' />
                    </button>
                )}
				<img
					src={Image}
					alt='test'
					width='100%'
					height='100%'
					className='product-image'
				/> */}
				<div className='no-image body-xs-medium'>
					<img
						src={GalleryIcon}
						alt='gallery export'
						width='24px'
						height='24px'
					/>
                    {open && <p>Drag or drop image here or just click to <span>browse</span> files.</p>}
				</div>
			</ImageContainer>
			<div>
				<InputField
					value={product.product_name}
					name={`products[${index}].product_name`}
					label='Product name'
					width='500px'
					required
                    readonly={!open}
                    bg={!open && "#fff"}
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
                        <InputField
                            value={product.tags}
                            name={`products[${index}].tags`}
                            label='Add product tags'
                            width='500px'
                        />
                    </HiddenFields>
                )}
			</div>
		</AddProductField>
        // <div style={{border: '1px solid red'}} key={index}>
        //     <div onClick={()=> toggle(index)}>
        //         <img src={Image} alt="test" height="56px" width="56px"/>
        //         <p>Toggle heree</p>
        //         {!open ? "+" : "-"}
        //     </div>

        //     {open && (
        //         <div>
        //         <p>accordion {index} is inactive</p>
        //         <p>accordion {index} is inactive</p>
        //         <p>accordion {index} is inactive</p>
        //         <p>accordion {index} is inactive</p>
        //         <p>accordion {index} is inactive</p>
        //     </div>
        //     )}
        // </div>
	);
};

export default ProductField;
