import styled from "styled-components";

export const SingleProductContainer = styled.div`
    padding: 0 48px;

    header{
        .body-xs-regular{
            padding-top: 4px;
        }
    }
    @media only screen and (max-width: 768px) {
        padding: 16px;
    }
`
export const AddProductContainer = styled.div`
    max-width: 816px;
    margin-top: 32px;
`

export const AddProductField = styled.div`
    position: relative;
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    max-height: ${({open})=> open ? "" : "58px"};

    .accordion-arrow {
        border: none;
        z-index: 1;
        position: absolute;
        right: -30px;
        background: inherit;
    }
    .fields-container {
        width: 500px;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: ${({open})=> open ? "column" : "row"};
        .fields-container {
            width: 100%;
        }
        .accordion-arrow {
            right: 0;
        }
    }
`

export const ImageContainer = styled.div`
    position: relative;
    width: ${({open})=> open ? "300px" : "56px"};
    max-width: 300px;
    height: ${({open})=> open ? "300px" : "56px"};
    border: ${({isImageAvailable}) => isImageAvailable ? "none" : "1px dashed var(--line-text)"};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({dragActive}) => dragActive ? "var(--input-bg)" : "#fff"};

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
        border-radius: 8px;
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
    @media only screen and (max-width: 500px) {
        min-width: 56px;
    }
`

export const HiddenFields = styled.div`
    /* border: 1px solid red; */
`