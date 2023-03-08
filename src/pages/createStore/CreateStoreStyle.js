import styled from 'styled-components';

export const CreateStoreContainer = styled.div`
    .auth_container {
        padding: 38px 38px 0;
        gap: 8px;
        button {
            z-index: 1;
            cursor: pointer;
            background: inherit;
            border: none;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
        }
    }
    form{
        padding-top: 24px;
        button {
            margin-top: 48px;
        }
    }
    @media screen and (max-width: 768px) {
        .auth_container {
            padding: 38px 16px;
        }
    }
`