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


export const VerifyEmailContainer = styled.div`
	height: 100vh;
	background: var(--accent_3-primary);
	padding: 20px 0;
	color: #fff;
	.secondary {
		float: right;
		margin-right: 96px;
	}
	@media screen and (max-width: 768px) {
		.secondary {
			float: right;
			margin-right: 16px;
		}
	}
`;

export const Content = styled.div`
	clear: both;
	height: max-content;
	position: absolute;
	width: 420px;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	max-width: 100%;
	max-height: 100%;
	overflow: auto;

	.body-sm-regular {
		margin: 16px 0 32px;
	}
	@media screen and (max-width: 768px) {
		padding: 16px;
	}
`;
