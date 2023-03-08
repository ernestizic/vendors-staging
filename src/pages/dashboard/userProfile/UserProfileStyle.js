import styled from 'styled-components';

export const ProfileContainer = styled.div`

    section{
        border-bottom: 1px solid var(--line-text);
        padding: 48px 0;
        margin: 0 48px;
        display: flex;
        justify-content: space-between;
        gap: 48px;
        header{
            margin-bottom: 4px;
        }
    }
    .profile-image-section{
        padding-top: 0;
    }
    .update-password-section{
        border: none;
    }
	@media only screen and (max-width: 768px) {
        section{
            padding: 48px 0;
            margin: 0 16px;
            flex-direction: column;
        }
	}
`;

export const FormContainer = styled.div`
    width: 666px;
    min-width: 666px;
    input {
        margin-bottom: 24px;
    }
    button {
        margin-top: 8px;
        float: right;
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
        min-width: 100%;
	}
`
