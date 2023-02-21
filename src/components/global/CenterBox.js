import styled from 'styled-components';

export const CenterBox= styled.div`
	height: 100vh;
	padding: 20px 0;
`;

export const ContentCenter = styled(CenterBox)`
	height: max-content;
	position: absolute;
	width: ${({ width }) => (width ? width : '420px')};;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	max-width: 100%;
	max-height: 100%;
	overflow: auto;
	@media screen and (max-width: 768px) {
		padding: 16px;
	}
`;
