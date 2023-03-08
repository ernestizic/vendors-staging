import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 24px;
	background: var(--input-bg);
	border-radius: 8px;
	display: flex;
	align-items: center;
	gap: 16px;
	.remove-image {
		display: flex;
		align-items: center;
		gap: 8px;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		height: 40px;
		padding: 8px 16px;
		color: #b42318;
		margin-top: 0px;
		border: 1px solid #b42318;
		border-radius: 8px;
		cursor: pointer;
		background: #fff;
	}
	@media only screen and (max-width: 768px) {
        flex-direction: column;
        padding: 24px 8px;
	}
`;
export const ImageContainer = styled.div`
	width: 108px;
	height: 108px;
	background: ${({ userImage }) => (userImage ? '' : 'var(--primary-main)')};
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	img {
		max-width: 100%;
		height: auto;
		border-radius: 100%;
	}
`;

export const UploadFileContainer = styled.div`
    display: flex;
    gap: 8px;
	input[type='file'] {
		display: none;
	}
	.button {
		display: flex;
		align-items: center;
		gap: 8px;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		height: 40px;
		padding: 8px 16px;
		border: 1px solid #121212;
		border-radius: 8px;
		cursor: pointer;
		background: inherit;
	}
`;
