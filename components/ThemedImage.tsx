import { View, Text, Image, ImageSourcePropType, StyleProp, ImageStyle } from 'react-native'
import React from 'react'

type ThemedImageProps = {
  type?: 'default' | 'circle';
  width: number;
  height: number;
  sourceImage: ImageSourcePropType
  style?: StyleProp<ImageStyle>;
}

const ThemedImage = ({type, width, height, sourceImage, style}: ThemedImageProps) => {
  const imageStyles = [
    { width: width, height: height },
    type === 'circle' ? { borderRadius: width / 2 } : undefined,
    style,
  ];

  return (
    <Image source={sourceImage} resizeMode='contain' resizeMethod='scale' style={ imageStyles }/>
  )
}

export {ThemedImage}