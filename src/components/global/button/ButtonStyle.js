import styled from 'styled-components';

export const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => height || '56px'};
	color: var(--white);
	background: var(--primary-main);
	border-radius: 8px;
	border: none;
	transition: all 0.2s ease-out;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	&:hover {
		background: var(--primary-dark);
		cursor: pointer;
	}
	&:focus {
		background: var(--primary-main);
		box-shadow: 0px 16px 40px 5px rgba(213, 216, 223, 0.2);
		border: 4px solid var(--primary-light);
	}
	&:disabled {
		opacity: 0.5;
		cursor: default;
		&:hover {
			background: var(--primary-main);
		}
	}
    /* Secondary button */
	&.secondary {
		border: 1px solid var(--gray-scale-placeholder);
		color: var(--title-active);
		background: var(--white);
		&:hover {
			box-shadow: 0px 16px 40px 5px rgba(213, 216, 223, 0.2);
			background: var(--background);
		}
		&:focus {
			border: 4px solid var(--title-active);
			box-shadow: 0px 16px 40px 5px rgba(213, 216, 223, 0.2);
		}
	}
    /* Text button */
	&.text-btn {
		border: none;
		color: var(--primary-main);
		background: inherit;
        box-shadow: none;
		&:hover {
			color: var(--primary-dark);
		}
	}
    /* dashed button */
	&.dashed {
		border: 1px dashed var(--line-text);
		color: var(--primary-main);
		background: inherit;
        box-shadow: none;
	}
`;
