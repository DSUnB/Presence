import React from 'react'
import { Button } from 'react-native'
import { Div, Titm, TitM } from "./styles";
import Inputs from "../../components/inputs/input";

export default function Form() {
  return (
    <Div>
        <Titm>Ei, Estudante</Titm>
        <TitM>Crie uma conta!</TitM>
        <Inputs place="Nome" />
        <Inputs place="Matrícula" />
        <Inputs place="Email" />
        <Inputs place="Senha" />
        <Inputs place="Confirmação de Senha" />
        <Button title='Registre-se'></Button>
    </Div>
  ) 
}

