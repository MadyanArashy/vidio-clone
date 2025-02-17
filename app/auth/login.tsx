import { View, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedImage } from '@/components/ThemedImage'
import { ThemedButton } from '@/components/ThemedButton'
import { AntDesign } from '@expo/vector-icons'
import tw from 'twrnc';

const login = () => {

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
    <ThemedView style={tw`flex-1 justify-center items-center`}>
      <SafeAreaView>
        <ScrollView>
          <ThemedView style={tw`flex-col flex-1 gap-8`}>
            <View style={tw`mt-28 flex-col gap-2`}>
              <ThemedText type='subtitle' style={tw`text-center`}>
                Sign in to Vidio for free!
              </ThemedText>
              <ThemedText style={tw`text-center`}>
                Get content recommendations and download your favorite videos to watch everytime!
              </ThemedText>
            </View>

            <View style={tw`flex-col gap-4`}>
              <TextInput style={tw`text-lg border-2 border-neutral-200 rounded-xl`}/>
              <TextInput style={tw`text-lg border-2 border-neutral-200 rounded-xl`}/>
            </View>

            <View style={tw`flex-col gap-4`}>
              <ThemedButton text='Log In' route={'/(tabs)'} bgColor='[#ED203F]' textColor='neutral-100'/>
              <ThemedText style={tw`text-center`}>
                or sign in with
              </ThemedText>
              <View style={tw`flex-row gap-4 items-center justify-center mx-auto`}>
                <AntDesign name='apple1' size={25} style={tw`p-2 border-2 border-${colors.borderColor} rounded-xl`} color={colors.iconColor}/>
                <AntDesign name='google' size={25} style={tw`p-2 border-2 border-${colors.borderColor} rounded-xl`} color={colors.iconColor}/>
                <AntDesign name='facebook-square' size={25} style={tw`p-2 border-2 border-${colors.borderColor} rounded-xl`} color={colors.iconColor}/>
              </View>
            </View>

            <ThemedButton text="Don't have a Vidio account? Sign Up" route={'/auth/register'} bgColor='transparent' textSize={tw``} textStyle={tw`text-blue-400`} style={[tw`text-center text-sm`, {textDecorationLine: 'underline'}]}/>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  )
}

export default login