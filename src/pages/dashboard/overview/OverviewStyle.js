import styled from 'styled-components';

export const OverviewPage = styled.div`
    padding: 0 48px;
    @media only screen and (max-width: 768px) {
		padding: 0 16px;
	}
`

export const OverviewCardsContainer = styled.div`
    overflow: scroll;
    display: flex;
    gap: 24px;
    &::-webkit-scrollbar {
        display: none;
    }	
    @media only screen and (max-width: 768px) {
        gap: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
	}
`

export const BottomRow = styled.div`
    margin-top: 32px;
    display: flex;
    gap: 24px;
    .overview-table-container {
        border: 1px solid var(--line-text);
        border-radius: 8px;
        padding: 24px;
        width: 100%;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }	
    }
    .chart-column-container {
        border: 1px solid var(--line-text);
        border-radius: 8px;
        padding: 23px 24px;
        min-width: 310px;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
	}
`