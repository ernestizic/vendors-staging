import styled from 'styled-components';

export const CreateStoreContainer = styled.div`
    background: #fff;
    .auth_container {
        padding: 38px 38px 0;
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