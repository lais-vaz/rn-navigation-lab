import { Text, View } from "react-native";

// Passe os parametros de forma correta e realize a estilização do componente
export default function CardJogo(props) {
  return (
    <View>
      <Text>Titulo: {props.titulo }</Text>
      <Text>Genero: {props.genero} </Text>
      <Text>Plataforma: {props.plataforma} </Text>
      <Text>Nota: {props.nota} </Text>
    </View>
  );
}
