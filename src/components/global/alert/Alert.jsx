import React from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import CloseIcon from '../../../assets/icons/close-square-white.svg';
import {clearAlert} from '../../../redux/slices/alertSlice'

const AlertContainer = styled.div`
    position: fixed;
    z-index: 100;
    top: 108px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    background: var(--accent_3-primary);
    width: 327px;
    max-width: 327px;
    word-break: break-word;
    border-radius: 4px;
    padding: 14px 16px;
    button {
        margin-left: 10px;
        border: none;
        background: inherit;
        cursor: pointer;
        img {

        }
    }
`

const Alert = ({message}) => {
    const dispatch = useDispatch()
  return (
    <AlertContainer className='flexRow alignCenter justifySpaceBetween'>
        <p>{message}</p>
        <button onClick={()=> dispatch(clearAlert())}>
            <img src={CloseIcon} alt="close" width="20px"/>
        </button>

    </AlertContainer>
  )
}

export default Alert