import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Arrowleft from '../../../assets/icons/arrow-left.svg';
import PlusIcon from '../../../assets/icons/plus_white.svg';
import searchIcon from '../../../assets/icons/search.svg';
import MenuIcon from '../../../assets/icons/menu.svg';
// import closeIcon from '../../../assets/icons/close_square.svg';
import Button from '../../global/button/Button';
import {
	HeaderContainer,
	FirstSection,
	SecondSection,
	SearchBox,
} from './HeaderStyle';

const Header = ({ title, subTitle, goBack }) => {
	const navigate = useNavigate();
	return (
		<HeaderContainer>
			<FirstSection>
				{goBack && (
					<button className='back-button' onClick={() => navigate(-1)}>
						<img src={Arrowleft} alt='go back' />
					</button>
				)}
				<div>
					<header className='body-md-semibold'>{title}</header>
					<p className='body-xs-medium'>{subTitle}</p>
				</div>
			</FirstSection>

			<SecondSection>
				<SearchBox>
					<img src={searchIcon} alt='search' className='search-icon' />
					<input type='search' placeholder='Search products' />
					{/* <img src={closeIcon} className='close-icon' alt='close' /> */}
				</SearchBox>
				<Button
					text='Add product'
					iconLeft={PlusIcon}
					width='180px'
					onClick={() => navigate('/add-product')}
				/>

				{!goBack && (
					<>
						<img src={searchIcon} alt='search' className='mobile-search-icon' />
						<img
							src={MenuIcon}
							alt='menu'
							className='mobile-menu'
							onClick={() => document.querySelector(".sidebar").classList.add("open")}
						/>
					</>
				)}
			</SecondSection>
		</HeaderContainer>
	);
};

// PropTypes
Header.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	goBack: PropTypes.bool,
};

export default Header;
