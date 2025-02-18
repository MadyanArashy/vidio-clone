import { View, Text, Image, ImageSourcePropType, StyleProp, ImageStyle } from 'react-native'
import React from 'react'

type ThemedImageProps = {
  type?: 'default' | 'circle';
  width?: number;
  height?: number;
  sourceImage: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat';
}

const ThemedImage = ({type, width, height, sourceImage, style, resizeMode, ...otherProps}: ThemedImageProps) => {
  const imageStyles = [
    { width: width, height: height },
    type === 'circle' ? { borderRadius: 100000 } : undefined,
    style,
  ];
  if(!resizeMode){resizeMode = 'cover'}
  return (
    <Image source={sourceImage} resizeMode={resizeMode} style={ imageStyles } {...otherProps}/>
  )
}

export {ThemedImage}