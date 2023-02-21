import styled from "styled-components";

export const SingleProductContainer = styled.div`
    padding: 0 48px;

    header{
        .body-xs-regular{
            padding-top: 4px;
        }
    }
`
export const AddProductContainer = styled.div`
    max-width: 816px;
    /* border: 1px solid red; */
    margin-top: 32px;
`

export const AddProductField = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 300px;
    /* max-width: 300px; */
    height: 300px;
    border: 1px dashed var(--line-text);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 40px;
        height: 40px;
        border: none;
        background: rgba(247, 247, 247, 0.5);
        border-radius: 30px;
    }
    .product-image {
        object-fit: cover;
    }
    .no-image {
        max-width: 194px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            margin-top: 10px;
        }
        span{
            color: var(--primary-main)
        }
    }
`