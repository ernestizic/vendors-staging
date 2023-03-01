import styled from 'styled-components';

export const TableContainer = styled.div`
    /* border: 1px solid red; */
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }	

    table {
        font-weight: 475;
        font-size: 14px;
        min-width: 100%;
        border-collapse: collapse;
        thead {
            tr {
                background: var(--background);
            }
            th {
                /* border: 1px solid blue; */
                font-style: normal;
                font-weight: 475;
                font-size: 12px;
                padding: 16px 8px;
                text-align: left;
                white-space: nowrap;
            }
        }
        td {
            /* border: 1px solid red; */
            padding: 16px 8px;
            white-space: nowrap;
        }
    }
`

export const CheckBox = styled.div`
    border: 1px solid var(--body-text);
    border-radius: 4px;
    width: 20px;
    height: 20px;
`

export const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    .product-name {
        max-width: 98px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
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