import React from "react";
import { Div, Titm, TitM } from "./Styles";
import { Text, Button } from "react-native";
import Inputs from "../../components/inputs/input";

function Login({ navigation }) {
  return (
    <Div>
      <TitM>Bem vindo,</TitM>
      <Titm>Estudante!</Titm>
      <Inputs place='             Matrícula' iconeF='mail' />
      <Inputs place="             Senha" iconeM='lock-outline' secure='true'/>
      <Text>Não tem uma conta ainda?</Text>
      <Button
      title='Registre-se'
      onPress={() => navigation.navigate('Form')}
      ></Button>
    </Div>
  );
}

export default Login;

