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
        td {
            border-bottom: 1px solid var(--line-text);
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

export const PaginationContainer = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--input-bg);
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 12px 16px;
    & > div {
        display: flex;
        align-items: center;
        gap: 14px;
    }
    
    .pagination-container{
        list-style-type: none;
        display: flex;
        gap: 10px;
    }
    .page-button-a {
        background: #fff;
        border-radius: 4px;
        padding: 3px 10px;
        &:hover {
            cursor: pointer;
        }
    }

    .previousBtn-a, .nextBtn-a {
        padding: 5px 5px 3px;
        background: #fff;
        border-radius: 4px;
        cursor: pointer;
    }
    .active-page-button {
        color: #fff;
        background: var(--title-active);
    }
    .paginationDisabled {
        img {
            cursor: auto;
            filter: invert(60%);
        }
	}
    @media only screen and (max-width: 768px) {
        overflow: hidden;
		p{
            display: none;
        }
	}
`