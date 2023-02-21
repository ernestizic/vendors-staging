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
	const styleProps = { width, text, type, disabled, onClick, className };

	if (isLoading) {
		return (
			<StyledButton {...styleProps}>
				<Loader />
			</StyledButton>
		);
	}
	return (
		<StyledButton {...styleProps}>
			{iconLeft && (
				<img
					src={iconLeft}
					alt='icon'
				/>
			)}
			{text && <span>{text}</span>}
			{iconRight && (
				<img
					src={iconRight}
					alt='icon'
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
