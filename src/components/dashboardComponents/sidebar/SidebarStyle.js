import styled from 'styled-components';

export const SidebarContainer = styled.div`
	border-right: 1px solid var(--line-text);
	background: var(--background);
	position: fixed;
	width: 240px;
	height: 100vh;
    max-height: 100vh;
	color: black;
	transition: 0.2s ease;
	overflow: auto;
`;

export const SelectStoreContainer = styled.div`
	margin-top: 48px;
	padding: 8px 16px;
	display: flex;
	gap: 8px;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
	.store-logo-text {
		border-radius: 50%;
		width: 36px;
		height: 36px;
		background: var(--primary-main);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}
`;

export const SidebarMenu = styled.ul`
	list-style-type: none;
	margin: 50px 0 0;
	padding: 0;
`;

export const ListItem = styled.li`
	a {
		margin: 16px 0;
		padding: 16px;
		text-decoration: none;
		display: flex;
		gap: 8px;
		font-weight: 475;
		font-size: 14px;
		line-height: 20px;
        color: var(--label)
	}
    .active {
        color: var(--title-active);
        img {
            filter: brightness(0%);
        }
	}
`;
