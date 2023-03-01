import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const TagContainer = styled.div`
    .tag {     
        color: ${({color})=> color ? color : "var(--title-active)"};
        background: ${({bg})=> bg ? bg : "var(--background)"};
        padding: 2px 8px;
        border-radius: 16px;
        width: max-content; 
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .live{
        background: var(--success-light);
        color: var(--success-default);
    }
    .pause{
        background: var(--error-light);
        color: var(--error-default);
    }
`

const Dot = styled.div`
    width: 8px;
    height: 8px;
    background: ${({content})=> content === "live" ? "var(--success-default)" : "var(--error-default)"};
    border-radius: 100%;
`

const Tag = ({content, status, color, bg}) => {
  return (
    <TagContainer color={color} bg={bg}>
        <div className={`tag ${status && content==="live" && "live"} ${ status && content ==="paused" && "pause"}`}>
            {status && <Dot content={content}/>}
            {content}
        </div>
    </TagContainer>
  )
}

// PropTypes
Tag.propTypes = {
	content: PropTypes.string,
	status: PropTypes.bool,
    color: PropTypes.string,
    bg: PropTypes.string
};

export default Tag