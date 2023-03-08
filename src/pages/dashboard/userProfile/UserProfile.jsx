import React from 'react'
import Header from '../../../components/dashboardComponents/header/Header'
import PasswordUpdate from '../../../components/dashboardComponents/profile/PasswordUpdate'
import PersonalInformation from '../../../components/dashboardComponents/profile/PersonalInformation'
import ProfileImageUpdate from '../../../components/dashboardComponents/profile/ProfileImageUpdate'
import { FormContainer, ProfileContainer } from './UserProfileStyle'

const UserProfile = () => {
  return (
    <>
        <Header title="User profile" />
        <ProfileContainer>
            <section className='profile-image-section'>
                <div>
                    <header className='body-md-semibold'>Profile image</header>
                    <p className='body-xs-regular'>Update your account’s profile picture.</p>
                </div>
                <FormContainer>
                    <ProfileImageUpdate /> 
                </FormContainer>
            </section>

            <section>
                <div>
                    <header className='body-md-semibold'>Personal information</header>
                    <p className='body-xs-regular'>Update your personal information and email address.</p>
                </div>
                <FormContainer>
                    <PersonalInformation />  
                </FormContainer>
            </section>

            <section className='update-password-section'>
                <div>
                    <header className='body-md-semibold'>Update password</header>
                    <p className='body-xs-regular'>Secure your account with a password containing one upper case, symbol, and number.</p>
                </div>
                <FormContainer>
                    <PasswordUpdate />
                </FormContainer>
            </section>
        </ProfileContainer>
    </>
  )
}

export default UserProfile