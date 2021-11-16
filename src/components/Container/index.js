import React from 'react'
import { BodyContainer } from './styles'

function BodyBox({children, ...props}) {

    return(
       <BodyContainer {...props}>
           {children}
       </BodyContainer>
    )
}

export default BodyBox