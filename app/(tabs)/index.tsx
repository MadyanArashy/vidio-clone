import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedImage } from '@/components/ThemedImage'
import { Ionicons } from '@expo/vector-icons'
import Menu from '@/components/Menu'
import tw from 'twrnc';


export default function HomeScreen() {

  const menuData = [
    {logo: 'trophy-outline', title: 'Premier League'},
    {logo: 'football-sharp', title: 'Sports'},
    {logo: 'infinite-sharp', title: 'Premier'},
    {logo: 'tv-outline', title: 'TV Shows'},
    {logo: 'film-outline', title: 'Movies'},
    {logo: 'logo-octocat', title: 'Family'}
  ]

  const movieData = [
    {sourceImage: require('@/assets/images/godfather-movie-poster.png')},
    {sourceImage: require('@/assets/images/aruna-dan-lidahnya-poster.jpg')},
    {sourceImage: require('@/assets/images/gie-poster.jpeg')},
    {sourceImage: require('@/assets/images/agak-laen-poster.jpg')},
    {sourceImage: require('@/assets/images/sang-pemimpin-poster.jpg')},
    {sourceImage: require('@/assets/images/janji-joni-poster.jpg')},
    {sourceImage: require('@/assets/images/princess-mononoke-poster.jpg')},
  ]

  const elements =
  <ThemedView style={tw`flex-1`}>
    <SafeAreaView>
      <ScrollView>
        <ThemedView style={tw`px-4 flex-col`}>
          <View style={tw`flex-1 flex-row justify-between`}>
            <ThemedImage width={100} height={50} sourceImage={require('@/assets/images/vidio-logo-long.png')}/>
            <View style={tw`flex-row justify-center gap-4 items-center`}>
              <Ionicons name='search' size={25}/>
              <Ionicons name='notifications' size={25}/>
              <Ionicons name='menu' size={25}/>
            </View>
          </View>

          {/* Top Horizontal Banners */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row gap-2 h-55 mb-4`}>
              <ThemedImage width={300} sourceImage={require('@/assets/images/sang-pemimpin-poster.jpg')} resizeMode='stretch'/>
              <ThemedImage width={300} sourceImage={require('@/assets/images/agak-laen-poster.jpg')} resizeMode='stretch'/>
            </View>
          </ScrollView>
          {/* Category Icons */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row justify-center items-center gap-2`}>
              {menuData.map((item, index) => (
                <Menu key={index} icon={item.logo} title={item.title}/>
              ))}
            </View>
          </ScrollView>
          {/* Video Originals Text */}
          <ThemedView style={tw`flex-row justify-between mb-4`}>
            <ThemedText type='subtitle'>
              Vidio Originals
            </ThemedText>
            <ThemedText type='subtitle'>
              &gt;
            </ThemedText>
          </ThemedView>
          {/* Video Originals Posters */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row justify-center items-center gap-4 h-55 mb-4`}>
              {movieData.map((item, index) => (
                <ThemedImage key={index} sourceImage={item.sourceImage} width={190} height={250} resizeMode='cover'/>
              ))}
            </View>
          </ScrollView>
          {/* Video For Kids */}
          <ThemedView style={tw`flex-row justify-between mb-4`}>
            <ThemedText type='subtitle'>
              Kids' Favorite
            </ThemedText>
            <ThemedText type='subtitle'>
              &gt;
            </ThemedText>
          </ThemedView>
          {/* Video Originals Posters */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row justify-center items-center gap-4 h-55`}>
              {movieData.map((item, index) => (
                <ThemedImage key={index} sourceImage={item.sourceImage} width={190} height={250} resizeMode='cover'/>
              ))}
            </View>
          </ScrollView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  </ThemedView>

  return (
    elements
  );
}
