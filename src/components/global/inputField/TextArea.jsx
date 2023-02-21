import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import styled from 'styled-components';
import { ErrorText } from './InputFieldStyle';

const TextAreaContainer = styled.div`
	position: relative;
    padding: 16px 24px 0px;
    height: 115px;
    max-height: 115px;
    background: var(--input-bg);
    margin-bottom: 16px;
    border-radius: 8px;
    label {
		color: var(--label);
		font-weight: 475;
		font-size: 14px;
		line-height: 20px;
		span{
            color: var(--error-default);
        }
	}

    textarea {
        font-family: "General Sans";
        background: var(--input-bg);
		width: 100%;
		border: none;
        resize: none;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		outline: none;
	}
`;

const TextArea = ({ label, name, value, required, ...props }) => {
    const [field, meta] = useField({ ...props, name });
	return (
        <>
            <TextAreaContainer>
                <label htmlFor={name}>
                    {label} {required && <span>*</span>}
                </label>

                <textarea
                    {...props}
                    {...field}
                    id={name}
                    autoComplete='off'
                    value={value}
                />
            </TextAreaContainer>
            {meta.error && meta.touched && <ErrorText className='metadata'>{meta.error}</ErrorText>}
        </>
	);
};


TextArea.propTypes = {
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	required: PropTypes.bool,
};

export default TextArea;
