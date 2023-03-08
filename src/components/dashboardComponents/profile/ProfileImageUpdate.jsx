import React, { useState } from 'react';
import CameraIcon from '../../../assets/icons/camera.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import { UploadFileContainer, ImageContainer, Wrapper} from './ProfileImageUpdateStyle';

const ProfileImageUpdate = () => {
	const [userImage] = useState(null);

	const onImageChange = () => {
		// Image upload here
	};

	return (
		<Wrapper>
			<ImageContainer userImage={userImage}>
				{userImage ? (
					<img src={userImage} alt='user' />
				) : (
					<p className='display-lg-semibold'>AO</p>
				)}
			</ImageContainer>

			<UploadFileContainer>
				<label htmlFor='profile-image' className='file-upload'>
					<span type='button' className='button'>
						<img src={CameraIcon} alt='camera' width='20px' />
						Change image
					</span>
				</label>
				<input
					type='file'
					accept='image/*'
					id='profile-image'
					name='avatar'
					onChange={onImageChange}
				/>
                <button className='remove-image'>
                    <img src={TrashIcon} alt='trash' width='20px' />
                    Remove image
                </button>
			</UploadFileContainer>
		</Wrapper>
	);
};

export default ProfileImageUpdate;
