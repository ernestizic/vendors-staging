import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../../assets/icons/close-square-white.svg'
import styled from 'styled-components';

const FieldContainer = styled.div`
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
		span {
			color: var(--error-default);
		}
	}
	&:focus-within label {
		transform: translate(0, 6px) scale(1);
		font-size: 14px;
	}
	.filled {
		transform: translate(0, 6px) scale(1);
	}
`;
const TagInputContainer = styled.div`
	background: var(--input-bg);
	padding: 0 24px;
	border-radius: 8px;
	display: flex;
	align-items: flex-end;
	max-width: 500px;
	overflow: scroll;
	gap: 0.5em;
	&::-webkit-scrollbar {
		display: none;
	}

	.tag-item {
		margin-bottom: 8px;
		background-color: var(--primary-main);
		color: #fff;
		display: flex;
        gap: 9px;
        align-items: center;
		padding: 2px 8px;
		border-radius: 16px;
		font-weight: 475;
		font-size: 12px;
		line-height: 18px;
        img {
            cursor: pointer;
        }
	}
	.tags-input {
		padding-top: 36px;
		padding-left: 0;
		background: var(--input-bg);
		border-radius: 8px;
		border: none;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
`;
const TagInputField = ({ name, label, setFieldValue }) => {
	const [tags, setTags] = useState([]);

	// Add a tag
	function handleKeyDown(e) {
		// // If user clicks spacebar
		if (e.key === 'Space' || e.keyCode === 32) {
			// // Get the value of the input
			const value = e.target.value;
			// If the value is empty, return
			if (!value.trim()) return;
			// Add the value to the tags array and clear input
			const lastAddedTag = [...tags, value]
			setTags(lastAddedTag);
			setFieldValue(name, lastAddedTag.join(","))
			e.target.value = '';
		}
	}

	// Remove tag
	function removeTag(index) {
		const tagsLeft = tags.filter((el, idx) => idx !== index)
		setTags(tagsLeft);
		setFieldValue(name, tagsLeft.join(","))
	}

	return (
		<FieldContainer>
			<label
				className={tags.length > 0 ? 'filled' : ''}
				htmlFor={name}
			>
				{label}
			</label>
			<TagInputContainer>
				{tags.map((tag, index) => (
					<div className='tag-item' key={index}>
						<p className='text'>{tag}</p>
						<img src={CloseIcon} alt="close" width="10px" onClick={()=> removeTag(index)} />
					</div>
				))}
				<input
					onKeyDown={handleKeyDown}
					type='text'
					className='tags-input'
					id={name}
					autoComplete='off'
				/>
			</TagInputContainer>
		</FieldContainer>
	);
};

// PropTypes
TagInputField.propTypes = {
	value: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	setFieldValue: PropTypes.func.isRequired
};

export default TagInputField;
