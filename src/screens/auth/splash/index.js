import React, { Component } from 'react';
import { Wrapper, Text, Logos, Icons } from '../../../components';
import { appStyles, appSvgs, responsiveHeight, responsiveWidth } from '../../../services';

function Splash() {
  return (
    <Wrapper isMain isCenter>
      <Wrapper animation={'slideInLeft'} isAbsolute style={{ left: -responsiveWidth(35), top: responsiveHeight(22.5) }}>
        <Icons.Svg
          svg={appSvgs.logo_art_gray}
          size={responsiveHeight(60)}
        />
      </Wrapper>
      <Wrapper animation={'fadeIn'}>
      <Logos.Primary
        size={responsiveWidth(90)}
      />
      </Wrapper>
    </Wrapper>
  );
}

export default Splash;
