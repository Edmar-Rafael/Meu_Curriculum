import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconsContainer } from './styles'

export type IconsProps = {
  faIcon: IconProp;
  fa_plus?: boolean;
}

function Icons({faIcon, ...props}: IconsProps) {

  return (
    <IconsContainer 
      icon={faIcon} 
      className={props.fa_plus ? 'fa_plus': ''}
    />
  )
}

export default Icons