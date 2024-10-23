import { View, Text } from 'react-native'
import React from 'react'
import { Estudiante } from '../Modelos/estudiante'
import HookComponents from './Hooks/HookComponents'

export default function Clase(props: Estudiante) {
  return (
    <View>
      <HookComponents></HookComponents>
    </View>
  )
}