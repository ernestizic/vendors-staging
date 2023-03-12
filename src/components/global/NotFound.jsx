import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ContentCenter } from './CenterBox'

const NotFoundPage = styled(ContentCenter)`
  text-align: center;
`

const NotFound = () => {
  return (
    <NotFoundPage>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/products">Return to dashboard</Link>
    </NotFoundPage>
  )
}

export default NotFound