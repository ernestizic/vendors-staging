import styled from 'styled-components';

export const OverviewTable = styled.table`
    margin-top: 16px;
    font-weight: 475;
    font-size: 14px;
    min-width: 100%;
    border-collapse: collapse;
    thead {
        tr {
            background: var(--background);
        }
        th {
            font-style: normal;
            font-weight: 475;
            font-size: 12px;
            padding: 16px 8px;
            text-align: left;
            white-space: nowrap;
            &:last-child {
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
            }
            &:first-child {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
            }
        }
    }
    a {
        color: var(--title-active);
    }
    td {
        border-bottom: 1px solid var(--line-text);
        padding: 16px 8px;
        white-space: nowrap;
    }
`

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;
    .product-name {
        max-width: 203px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        @media only screen and (max-width: 500px) {
            max-width: 56px;
        }
    }
    .product-image {
        width: 40px;
        height: 40px;
        border-radius: 2px;
    }
    & > div {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`