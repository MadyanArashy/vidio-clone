import { View, Button } from 'react-native'
import React from 'react'
import * as Haptics from 'expo-haptics'

const HeavyButton = () => {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: 'rgb(255, 0, 0,)' }}>
      <Button
      title='Heavy Button'
      onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}
      />
    </View>
  )
}

export default HeavyButton