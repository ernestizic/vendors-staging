import React from 'react'
import PropTypes from 'prop-types';
import { CardContent, CheckerContainer, Checker, MethodCard } from './AddMethodCardStyle'

const AddMethodCard = ({cardInfo, selectedMethod, setSelectedMethod}) => {
  return (
    <MethodCard selected={selectedMethod.id === cardInfo.id} onClick={() => setSelectedMethod(cardInfo)}>
        <div  className='icons-container'>
            <img src={cardInfo.icon} alt="icon"/>
            <CheckerContainer selected={selectedMethod.id === cardInfo.id}>
                <Checker selected={selectedMethod.id === cardInfo.id} />
            </CheckerContainer>
        </div>
        <CardContent>
            <p className='body-sm-semibold'>{cardInfo.title}</p>
            <p className='body-xs-regular colorBody'>{cardInfo.text}</p>
        </CardContent>
    </MethodCard>
  )
}

// PropTypes
AddMethodCard.propTypes = {
    cardInfo: PropTypes.object,
    selectedMethod: PropTypes.object,
    setSelectedMethod: PropTypes.func
};

export default AddMethodCard