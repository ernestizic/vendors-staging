import styled from 'styled-components';

export const EditProductContainer = styled.div`
	max-width: 816px;
    margin: 0 48px;
    @media only screen and (max-width: 768px) {
        margin: 0 16px;
    }
`;

export const EditProductField = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    .fields-container {
        width: 500px;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        .fields-container {
            width: 100%;
        }
    }
`
