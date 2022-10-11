import React from 'react'
import {  appIcons } from '../../services';
import * as Icons  from '../icons';

export const Primary = ({ size }) => {
  return (
    <Icons.Custom
      icon={appIcons.security}
      size={size}
    />
  );
}