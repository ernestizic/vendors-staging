import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { StyledButton } from './ButtonStyle';

const Button = ({
	width,
	text,
	type,
	disabled,
    className,
    onClick,
	iconLeft,
	iconRight,
	isLoading,
}) => {
	const props = { width, text, type, disabled, onClick, className };

	if (isLoading) {
		return (
			<StyledButton {...props}>
				<Loader />
			</StyledButton>
		);
	}
	return (
		<StyledButton {...props}>
			{iconLeft && (
				<img
					src={iconLeft}
					alt='icon'
					className={`icon${iconLeft && text ? ' left' : ''}`}
				/>
			)}
			{text && <span>{text}</span>}
			{iconRight && (
				<img
					src={iconRight}
					alt='icon'
					className={`icon${iconLeft && text ? ' right' : ''}`}
				/>
			)}
		</StyledButton>
	);
};

Button.defaultProps = {
	type: 'button',
};

// PropTypes
Button.propTypes = {
	width: PropTypes.string,
	text: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
