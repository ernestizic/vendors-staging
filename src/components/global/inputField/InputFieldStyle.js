import styled from 'styled-components';

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
    
	label {
		position: absolute;
		pointer-events: none;
		transform: translate(0, 18px) scale(1);
		transform-origin: top left;
		transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
		color: var(--label);
		font-weight: 475;
        font-size: 14px;
		line-height: 20px;
		left: 24px;
	}
    &:focus-within label {
        /* transform: translate(0, 6px) scale(0.8); */
        transform: translate(0, 6px) scale(1);
        font-size: 14px;
    }
    .filled {
        /* transform: translate(0, 6px) scale(0.8); */
        transform: translate(0, 6px) scale(1);
    }
    input {
        margin-bottom: 16px;
        width: 100%;
        background: var(--input-bg);
        height: 56px;
        max-height: 56px;
        border-radius: 8px;
        border: none;
        /* padding: 18px 24px; */
        padding-top: 36px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        outline: none;
        transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

        &[type="password"] {
            padding-right: 45px;
            &::-ms-reveal,
            &::-ms-clear {
                display: none;
            }
        }
        &.password {
            padding-right: 45px;
        }
    }
    .eye {
        position: absolute;
        top: 20px;
        right: 20px;
        &:hover{
            cursor: pointer;
        }
    }

    `;

    export const ErrorText = styled.div`
        color: var(--error-default);
        margin: -12px 0 16px;

    `
