import styled from 'styled-components';
import { ContentCenter } from '../../../global/CenterBox';

export const DeleteModalContainer = styled(ContentCenter)`
	position: fixed;
	background: #fff;
	width: 400px;
	padding: 24px;
	box-shadow: 0px 16px 40px 5px rgba(213, 216, 223, 0.2);
	border-radius: 12px;

    .top-icons{
        margin-bottom: 16px;
        button{
            background: inherit;
            border: none;
            cursor: pointer;
        }
    }
    .modal-btns {
        display: flex;
        gap: 12px; 
        margin-top: 32px;
    }
    @media screen and (max-width: 500px) {
		width: 343px;
        .modal-btns {
            flex-direction: column-reverse;
        }
	}
`;
