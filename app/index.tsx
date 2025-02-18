import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedImage } from '@/components/ThemedImage'
import { ThemedButton } from '@/components/ThemedButton'
import tw from 'twrnc';

const index = () => {
  return (
    <ThemedView style={tw`flex-1`}>
      <SafeAreaView>
        <ScrollView>
          <ThemedView style={tw`px-8 flex-col h-full flex-1`}>
            <View style={tw`mt-28 mb-1`}>
              <ThemedImage width={350} height={300} sourceImage={require('../assets/images/people.png')}/>
            </View>
            <ThemedText type='subtitle' style={tw`text-center`}>
              TV Channels, Soap Operas, Sports & K-Drama, we have it all
            </ThemedText>
            <ThemedText style={tw`text-center mb-30`}>
              Pick anything you like from 40+ TV Channels and hundreds of thousands of hours worth of content to watch in your free time.
            </ThemedText>
            <ThemedButton text='Sign In or Register' bgColor='[#ED203F]' textColor='neutral-50' route='/auth/register' />
            <ThemedButton text='Find Content' bgColor='transparent' textColor='neutral-500' route='/index' inline/>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  )
}

export default index