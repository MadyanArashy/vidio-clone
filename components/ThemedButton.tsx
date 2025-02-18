import { useRouter } from 'expo-router'
import React from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
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
  if(!bgColor) {bgColor = 'transparent'}
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
    <Text style={tw`text-center`}>{buttonContent}</Text>
  ) : (
    buttonContent
  )
}

export { ThemedButton }
