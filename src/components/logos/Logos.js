import React from 'react'
import { APP_ICONS, APP_SVGS, responsiveWidth } from '../../utilities';
import * as Icons  from '../icons/Icons';

export const Primary = ({ size }) => {
  return (
    <Icons.Svg
    svg={APP_SVGS.logo}
    size={size||responsiveWidth(50)}
    />
  );
}

export const PrimaryWhite = ({ size }) => {
  return (
    <Icons.Svg
    svg={APP_SVGS.logo_white}
    size={size||responsiveWidth(50)}
    />
  );
}