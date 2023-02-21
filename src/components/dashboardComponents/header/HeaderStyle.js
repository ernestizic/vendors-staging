import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #fff;
	border-bottom: 1px solid var(--line-text);
	margin-bottom: 32px;
	padding: 24px 48px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const FirstSection = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	.back-button {
		width: 40px;
		height: 40px;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		&:hover {
			cursor: pointer;
		}
	}
`;
export const SecondSection = styled.div`
	display: flex;
	gap: 24px;
`;

export const SearchBox = styled.div`
	position: relative;
	input {
		height: 56px;
		font-size: 16px;
		border: 1px solid var(--line-text);
		border-radius: 8px;
		width: 327px;
		padding: 15px;
		text-indent: 40px;
		&:focus {
			outline: none;
		}
		&::placeholder {
			font-weight: 475;
			font-size: 14px;
			line-height: 20px;
            color: var(--label)
		}
	}
	input[type='search']::-webkit-search-cancel-button {
		display: none;
	}
	.search-icon {
		position: absolute;
		top: 19px;
		left: 25px;
	}
	.close-icon {
		position: absolute;
		top: 18px;
		right: 14px;
		&:hover {
			cursor: pointer;
		}
	}
`;