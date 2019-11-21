import React from 'react'
import { ImageBackground } from 'react-native'

const BgImage = ({ children, style, ...props }) => {
  return (
      <ImageBackground
        source={require('../assets/icons/Pattern-Fill.png')}
        style={{flex: 1, width: null, height: null, ...style}}
        {...props}>
        {children}
      </ImageBackground>
  );
}

export default BgImage;

