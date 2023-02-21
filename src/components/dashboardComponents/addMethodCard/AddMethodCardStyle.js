import styled from "styled-components";

export const MethodCard = styled.div`
    border: 1px solid ${(props)=> props.selected ? "var(--title-active)" : "var(--line-text)"};
    width: 312px;
    padding: 24px 16px;
    border-radius: 8px;
    &:hover {
        cursor: pointer;
    }

    .icons-container {
        display: flex;
        justify-content: space-between;
        img {
            filter: brightness(0%);
        }
    }
`
export const CheckerContainer = styled.div`
    width: 20px;
    height: 20px;
    border: ${(props)=> props.selected ? "2px solid var(--primary-main)" : "1px solid var(--body-text)"};
    border-radius: 50%;
`
export const Checker = styled.div`
    width: 100%;
    height: 100%;
    border: ${(props)=> props.selected ? "2px solid #fff" : "none"};
    background: ${(props)=> props.selected ? "var(--primary-main)" : "inherit"};
    border-radius: 50%;
`
export const CardContent = styled.div`
    padding-top: 10px;
    .body-sm-semibold{
        margin-bottom: 8px;
    }
`