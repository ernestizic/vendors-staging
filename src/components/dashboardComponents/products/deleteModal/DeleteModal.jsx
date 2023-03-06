import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from '../../../global/Backdrop';
import Button from '../../../global/button/Button';
import CloseIcon from '../../../../assets/icons/close_square.svg'
import TrashIcon from '../../../../assets/icons/trash-glow.svg'
import { DeleteModalContainer } from './DeleteModalStyle';

const DeleteModal = ({showModal, deleteAction}) => {
	return (
        <Backdrop>
            <DeleteModalContainer>
                <div className='flexRow justifySpaceBetween alignCenter top-icons'>
                    <img src={TrashIcon} alt="trash" width="48px"/>
                    <button onClick={()=> showModal(false)}>
                        <img src={CloseIcon} alt="close" width="20px" />
                    </button>
                </div>
                <header className='body-lg-semibold'>Delete product</header>
                <p className='body-sm-regular'>
                    Are you sure you want to delete this product(s)? The product(s) will be
                    deleted from your store and cannot be recovered.
                </p>
                <div className='modal-btns'>
                    <Button 
                        className="secondary" 
                        text="Cancel" 
                        onClick={()=> showModal(false)}
                    />
                    <Button 
                        text="Confirm" 
                        onClick={()=> deleteAction()}
                    />
                </div>
            </DeleteModalContainer>
        </Backdrop>
	);
};

// PropTypes
DeleteModal.propTypes = {
	showModal: PropTypes.func,
	deleteAction: PropTypes.func,
};

export default DeleteModal;
