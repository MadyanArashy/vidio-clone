import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { ExternalPathString, RelativePathString, useNavigation, useRouter } from 'expo-router'
import React from 'react'
import tw from 'twrnc'

type ThemedButtonProps = {
  text: string;
  route: any;
  textColor?: string;
  textSize?: StyleProp<TextStyle>;
  bgColor?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  inline?: boolean;
}

const ThemedButton = ({text, textColor, bgColor, style, textStyle, textSize, inline, route}: ThemedButtonProps) => {
  const router = useRouter();
  if(!bgColor) {bgColor = 'red-500'}
  if(!textColor) {textColor = 'black'}
  if(!textSize) {textSize = tw`font-semibold text-lg`}

  const buttonContent = (
    <TouchableOpacity style={[tw`bg-${bgColor} px-12 py-3 rounded-xl`, style]} onPress={ () => router.push(route) }>
      <Text style={[tw`text-${textColor} text-center`, textStyle, textSize]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
  return inline ? (
   <View style={tw`flex-row`}>buttonContent</View>
  ) : (
    buttonContent
  )
}

export {ThemedButton}