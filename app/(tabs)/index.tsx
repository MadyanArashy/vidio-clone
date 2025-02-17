import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedImage } from '@/components/ThemedImage'
import { ThemedButton } from '@/components/ThemedButton'
import { Ionicons } from '@expo/vector-icons'
import tw from 'twrnc';


export default function HomeScreen() {
  return (
    <ThemedView style={tw`flex-1`}>
      <SafeAreaView>
        <ScrollView>
          <ThemedView style={tw`px-4 flex-col h-full flex-1`}>
            <View style={tw`flex-1 flex-row justify-between`}>
              <ThemedImage width={100} height={50} sourceImage={require('@/assets/images/vidio-logo-long.png')}/>
              <View style={tw`flex-row justify-center gap-4 items-center`}>
                <Ionicons name='search' size={25}/>
                <Ionicons name='notifications' size={25}/>
                <Ionicons name='menu' size={25}/>
              </View>
            </View>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
