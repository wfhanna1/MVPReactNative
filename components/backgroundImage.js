import React from 'react';
import { ImageBackground } from 'react-native';

const bgPattern = require('../assets/icons/Pattern-Fill.png');

export default function BgImage({ children, style }) {
  return (
    <ImageBackground
      source={bgPattern}
      style={
      {
        flex: 1, width: null, height: null, ...style
      }
       }
    >
      {children}
    </ImageBackground>
  );
}
