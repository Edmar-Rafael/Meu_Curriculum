import React, { ReactNode } from 'react'
import { ContainerBody } from './styles'

type ContainerProps = {
    children: ReactNode;
    flexDir?: string
}


function Container({children, flexDir}: ContainerProps) {

    return(
       <ContainerBody flexDir={flexDir}>
           {children}
       </ContainerBody>
    )
}

export default Container