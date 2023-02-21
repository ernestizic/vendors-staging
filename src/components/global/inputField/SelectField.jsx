import React, { useEffect, useState, useRef } from 'react';
import DropdownArrow from '../../../assets/icons/arrow-square-down.svg';
import PropTypes from 'prop-types';

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
		span{
            color: var(--error-default);
        }
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
	input {
		margin-bottom: 16px;
		width: 100%;
		background: var(--input-bg);
		height: 56px;
		max-height: 56px;
		border-radius: 8px;
		border: none;
		padding-top: 36px;
		padding-right: 50px;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		outline: none;
		transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		&:hover {
			cursor: pointer;
		}
	}
`;

const DropDownListContainer = styled('div')`
	position: absolute;
	top: 85%;
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

const SelectField = ({
	label,
	name,
	fieldData,
	setFieldValue,
	defaultOption,
	required
}) => {
	const ref = useRef(null);

	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value) => () => {
		setSelectedOption(`${value.name} ${value.other ? value.other : ''}`);
		setFieldValue(name, value.name);
		setIsOpen(false);
	};

	useEffect(() => {
		setFieldValue(name, defaultOption);
		// eslint-disable-next-line
	}, [defaultOption]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<DropDownContainer ref={ref}>
			<label
				className={(selectedOption || defaultOption) && 'filled'}
				htmlFor={name}
			>
				{label} {required && <span>*</span>}
			</label>
			<input
				type='text'
				value={selectedOption || defaultOption}
				readOnly
				onClick={toggling}
			/>
			<img
				src={DropdownArrow}
				alt='dropdown'
				className='dropdown-arrow'
				onClick={toggling}
			/>

			{isOpen && (
				<DropDownListContainer>
					<DropDownList>
						{fieldData.map((option) => (
							<ListItem onClick={onOptionClicked(option)} key={Math.random()}>
								{option.name} {option.other && `${option.other}`}
							</ListItem>
						))}
					</DropDownList>
				</DropDownListContainer>
			)}
		</DropDownContainer>
	);
};

// PropTypes
SelectField.propTypes = {
	name: PropTypes.string.isRequired,
	fieldData: PropTypes.arrayOf(
		PropTypes.exact({
			name: PropTypes.string.isRequired,
			other: PropTypes.string,
		})
	),
	setFieldValue: PropTypes.func.isRequired,
	label: PropTypes.string,
	defaultOption: PropTypes.string,
	required: PropTypes.bool
};

export default SelectField;
