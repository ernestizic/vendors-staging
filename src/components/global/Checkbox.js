import React, { useState } from 'react';
import PropTypes from "prop-types";
import Check from '../../assets/icons/check-good.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	label {
		margin-left: 10px;
	}
`;

export const CheckBoxContainer = styled.div`
	position: relative;
	border: 1px solid
		${({ checked }) => (checked ? 'var(--primary-main)' : 'var(--body-text)')};
	border-radius: 4px;
	width: 20px;
	height: 20px;
	background: ${({ checked }) =>
		checked ? 'var(--primary-main)' : 'transparent'};
	display: flex;
	align-items: center;
	justify-content: center;

	input {
		opacity: 0;
		width: 20px;
		height: 20px;
		top: 0;
		position: absolute;
		cursor: pointer;
	}
`;

const Checkbox = ({ label, disabled, defaultCheck, id, onChange, required }) => {
	const [isChecked, setIsChecked] = useState(defaultCheck);
	return (
		<Wrapper>
			<CheckBoxContainer checked={isChecked}>
				<input
					id={`checkbox-${id}`}
					type='checkbox'
					checked={isChecked}
					onChange={(e) => {
						setIsChecked((prev) => !prev);
                        onChange && onChange(e)
					}}
					disabled={disabled}
                    required={required}
				/>
				{isChecked && <img src={Check} alt='selected' /> }
			</CheckBoxContainer>
			{label && <label htmlFor={`checkbox-${id}`}>{label}</label>}
		</Wrapper>
	);
};

Checkbox.propTypes = {
    id: PropTypes.any,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    defaultCheck: PropTypes.bool,
    onChange: PropTypes.func,
    required: PropTypes.bool,
  };

export default Checkbox;
