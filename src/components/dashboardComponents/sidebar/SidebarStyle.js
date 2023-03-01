import styled from 'styled-components';

export const SidebarContainer = styled.div`
	.close-btn {
		display: none;
		border: none;
		background: inherit;
		float: right;
		margin: 34px;
	}
	.sidebar{
		background: var(--background);
		border-right: 1px solid var(--line-text);
		position: fixed;
		width: 240px;
		height: 100vh;
		max-height: 100vh;
		color: black;
		transition: 0.2s ease;
		overflow: auto;	
		&::-webkit-scrollbar {
			display: none;
		}	
	}
	@media only screen and (max-width: 768px) {
		.sidebar {
			width: 0;
			z-index: 10;
			background: #fff;
		}
		.close-btn {
			display: block;
		}
	}
`;

export const SelectStoreContainer = styled.div`
	clear: both;
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
	@media only screen and (max-width: 768px) {
		padding: 8px 24px;
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
	@media only screen and (max-width: 768px) {
		a {
			padding: 16px 40px;
		}
	}
`;
