import React, { useState } from 'react';
import DropdownArrow from '../../../assets/icons/arrow-square-down.svg';

import styled from 'styled-components';

const DropDownContainer = styled('div')`
	position: relative;

	label {
		position: absolute;
		pointer-events: none;
		transform: translate(0, 18px) scale(1);
		transform-origin: top left;
		transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		color: var(--label);
		font-weight: 475;
		font-size: 14px;
		line-height: 20px;
		left: 24px;
	}
    .filled {
        transform: translate(0, 6px) scale(1);
    }

	.dropdown-arrow {
		position: absolute;
		top: 19px;
		right: 19px;
		&:hover {
			cursor: pointer;
		}
	}
`;

const DropDownHeader = styled('div')`
	border: 1px solid blue;
	width: 100%;
	background: var(--input-bg);
	height: 56px;
	max-height: 56px;
	border-radius: 8px;
	border: none;
	padding: 26px 24px;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	outline: none;
	transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

const DropDownListContainer = styled('div')`
	position: absolute;
	top: calc(100% + 4px);
	max-height: 264px;
	width: 100%;
	background: #fff;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
	border-radius: 8px;
	overflow: auto;
	z-index: 1;
    &::-webkit-scrollbar {
		display: none;
	}
`;

const DropDownList = styled('ul')`
	padding: 16px 0;
	margin: 0;
	font-weight: 475;
	font-size: 16px;
`;

const ListItem = styled('li')`
	padding: 12px 24px;
	line-height: 24px;
	list-style: none;
    &:hover {
        background-color: var(--input-bg);
        cursor: pointer;
    }
`;


const SelectField = ({ label, name, fieldData, setFieldValue, defaultOption }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value) => () => {
		setSelectedOption(`${value.name} (${value.cc})`);
        setFieldValue("currency", value.name)
		setIsOpen(false);
	};

	return (
		<DropDownContainer>
			<label className={(selectedOption || defaultOption) && 'filled'} htmlFor={name}>
				{label}
			</label>
			<DropDownHeader onClick={toggling}>
                {selectedOption || defaultOption}
				<img src={DropdownArrow} alt='dropdown' className='dropdown-arrow' />
			</DropDownHeader>
			{isOpen && (
				<DropDownListContainer>
					<DropDownList>
						{fieldData.map((option) => (
							<ListItem onClick={onOptionClicked(option)} key={Math.random()}>
								{`${option.name} (${option.cc})`}
							</ListItem>
						))}
					</DropDownList>
				</DropDownListContainer>
			)}
		</DropDownContainer>
	);
};

export default SelectField;
