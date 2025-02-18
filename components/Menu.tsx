import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ThemedText } from './ThemedText'
import React from 'react'
import tw from 'twrnc'

type MenuProps = {
  icon: any;
  title: string;
}

const Menu = ({ icon, title }: MenuProps) => {
  const lightModeColors = {
    iconColor: 'black',
    borderColor: 'neutral-200',
  };
  const darkModeColors = {
    iconColor: 'white',
    borderColor: 'neutral-600',
  };

  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkModeColors : lightModeColors;

  return (
    <TouchableOpacity style={tw`flex-col w-15 justify-center items-center`}>
      <View style={tw`p-3 rounded-full border border-${colors.borderColor}`}>
        <Ionicons name={icon} size={28} color={colors.iconColor}/>
      </View>
      <ThemedText style={tw`text-center font-semibold text-xs h-10`}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  )
}

export default Menu