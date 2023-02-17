import React from 'react'
import PropTypes from 'prop-types';
import Logo from '../../../assets/icons/logo.svg'
import { AuthContainer, AuthWrapper } from './AuthLayoutStyle'

const AuthLayout = ({children, title, subtext}) => {
  return (
    <AuthWrapper>
        <AuthContainer>
            <header className='textCenter'>
                <img src={Logo} alt="logo" />
                <div className='header-text'>
                  <p className='title title-semi-bold'>{title}</p>
                  <p className='subtext body-sm-regular colorBody'>{subtext}</p>
                </div>
            </header>
            {children}
        </AuthContainer>
    </AuthWrapper>
  )
}

// PropTypes
AuthLayout.propTypes = {
	title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  subtext: PropTypes.string
};


export default AuthLayout