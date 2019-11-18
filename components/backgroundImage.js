import React from 'react'
import { BackgroundImage } from 'react-native'

const BgImage = ({ source, children, style, ...props }) => {
  return (
      <BackgroundImage
        source={source}
        style={{flex: 1, width: null, height: null, ...style}}
        {...props}>
        {children}
      </BackgroundImage>
  );
}

export default BgImage;

