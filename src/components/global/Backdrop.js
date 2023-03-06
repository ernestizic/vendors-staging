import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0,0,0,0.5);
	z-index: 5;
	overflow: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;
