import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import Eye from '../../../assets/icons/eye.svg';
import EyeSlash from '../../../assets/icons/eye_slash.svg';
import { InputContainer, ErrorText } from './InputFieldStyle';

const InputField = ({ type, name, value, label, ...props }) => {
	const [field, meta] = useField({ ...props, name });
	const [showPassword, setShowPassword] = useState(false);

	function handleType() {
		if (showPassword) return 'text';
		if (!showPassword) return 'password';
	}
	return (
		<>
			<InputContainer>
				<label className={value && 'filled'} htmlFor={name}>
					{label}
				</label>
				<input
					{...props}
					{...field}
					id={name}
					type={type === 'password' ? handleType() : type}
					autoComplete='off'
					value={value}
					className={type === "password" ? "password" : ""}
				/>
				{type === 'password' &&
					(showPassword ? (
						<img
							src={EyeSlash}
							alt='eye'
							className='eye'
							onClick={() => setShowPassword((prev) => !prev)}
						/>
					) : (
						<img
							src={Eye}
							alt='eye'
							className='eye'
							onClick={() => setShowPassword((prev) => !prev)}
						/>
					))}
				{meta.error && meta.touched && <ErrorText className='metadata'>{meta.error}</ErrorText>}
			</InputContainer>
		</>
	);
};

InputField.defaultProps = {
	type: 'text',
};

// PropTypes
InputField.propTypes = {
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	label: PropTypes.string,
};

export default InputField;
