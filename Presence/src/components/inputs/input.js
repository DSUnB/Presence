import React from 'react'
import { View } from 'react-native';
import { Botao } from './styles';

function Inputs(props) {
  return (
    <View>
      <Botao placeholder={props.place}></Botao>
    </View>
  )
}

export default Inputs;