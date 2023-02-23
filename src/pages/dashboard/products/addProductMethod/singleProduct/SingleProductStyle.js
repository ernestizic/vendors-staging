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
    position: relative;
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    max-height: ${({open})=> open ? "" : "58px"};

    .accordion-arrow {
        border: none;
        position: absolute;
        right: 0;
        background: inherit;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    width: ${({open})=> open ? "300px" : "56px"};
    max-width: 300px;
    height: ${({open})=> open ? "300px" : "56px"};
    border: 1px dashed var(--line-text);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    .file-upload {
        cursor: pointer;
    }
    input[type='file']{
          display: none;
      }

    button {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 40px;
        height: 40px;
        border: none;
        background: rgba(247, 247, 247, 0.5);
        border-radius: 30px;
        cursor: pointer;
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
            color: var(--primary-main);
        }
    }
`

export const HiddenFields = styled.div`
    /* border: 1px solid red; */
`