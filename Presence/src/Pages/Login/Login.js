import React from "react";
import { Div, Titm, TitM } from "./styles";
import { Text, Button, Pressable } from "react-native";
import Inputs from "../../components/inputs/input";
import Pressables from "../../components/pressables/pressable";

function Login({ navigation }) {
  return (
    <Div>
      <TitM>Bem vindo,</TitM>
      <Titm>Estudante</Titm>
      <Inputs place="E-mail" />
      <Inputs place="Senha" />
      <Pressable />
      <Text>Não tem uma conta ainda?</Text>
      <Button 
      title='Registre-se'
      onPress={() => navigation.navigate('Form')}
      ></Button>
    </Div>
  );
}

export default Login;
