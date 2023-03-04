import React, {useState} from 'react';
import styled from 'styled-components';
import AddMethodCard from '../../../../components/dashboardComponents/addMethodCard/AddMethodCard'
import Header from '../../../../components/dashboardComponents/header/Header';
import PlusIcon from '../../../../assets/icons/plus_white.svg'
import ArrowIcon from '../../../../assets/icons/arrow-up.svg'
import LinkIcon from '../../../../assets/icons/link.svg'
import Button from '../../../../components/global/button/Button';
import { useNavigate } from 'react-router-dom';

const ProductMethodContainer = styled.div`
	padding: 0 48px;
    header {
        max-width: 564px;
        .title-semi-bold{
            margin-bottom: 4px;
        }
    }
    @media only screen and (max-width: 768px) {
		padding: 16px;
        button{
            margin-left: 16px;
        }
	}
`;

const CardFlex = styled.div`
    margin: 48px 0;
    display: flex;
    gap: 24px;
    @media (max-width: 480px) {
        flex-direction: column;
        padding: 0 16px;
    }
`

const cardData = [
    {
        id: 1,
        icon: PlusIcon,
        title: 'Single Product',
        text: "Upload product by manually filling the product details.",
        url: "/add-product/add-product-details"
    },
    {
        id: 2,
        icon: ArrowIcon,
        title: 'Multiple products',
        text: "Import products from a CSV file.",
        url: "/add-product/import"
    },
    {
        id: 3,
        icon: LinkIcon,
        title: 'Product URL',
        text: "Copy the product link from your website, to upload the directly.",
        url: "/add-product/add-product-url"
    },
]



const AddProductMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState(cardData[0])
    const navigate = useNavigate()
	return (
		<>
			<Header title='Add products' subTitle='Choose method' goBack />
			<ProductMethodContainer>
				<header>
					<p className='title-semi-bold'>How would you like to add your products?</p>
					<p className='body-sm-regular colorBody'>
						Make a selection on how you want to upload your products, fill in
						the required information, and go live in minutes.
					</p>
				</header>

                <CardFlex>
                    {cardData.map((item, idx) => (
                        <AddMethodCard cardInfo={item} selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} key={idx}/>
                    ))}
                </CardFlex>
                <Button text="Continue" width="200px" onClick={()=> navigate(selectedMethod.url) } />
			</ProductMethodContainer>
		</>
	);
};

export default AddProductMethod;
