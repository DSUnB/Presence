import React from 'react'
import { Div, Titm, TitM } from './Styles';
import Inputs from '../components/inputs/input';

function Login() {
  
  return (
    <Div>
        <TitM>Bem vindo,</TitM>
        <Titm>Estudante</Titm>
        <Inputs place='E-mail'/>
        <Inputs place='Senha' />
    </Div>
  )
}

export default Login;

  