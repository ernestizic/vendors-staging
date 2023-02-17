import styled from 'styled-components';

export const AuthWrapper = styled.div`
    display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
    overflow: auto;
	@media screen and (max-width: 768px) {
		z-index: -1;
	}
`;

export const AuthContainer = styled.div`
	padding: 50px 16px;
	width: 384px;
	margin: auto;
	header {
		.header-text {
			margin: 8px 0 24px;
		}
	}
`;
