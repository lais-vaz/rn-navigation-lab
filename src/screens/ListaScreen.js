// TODO: estilizar esta tela com as cores e identidade visual do seu tema

import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
// TODO: apos criar o componente CardJogo, importe-o aqui:
// import { CardJogo } from '../components'; CONCLUIDO
import { cardJogo } from '../components';

// Dados de exemplo para voce visualizar o renderItem funcionando
// Em um app real, esses itens chegariam via route.params enviados pela DetalheScreen
const jogosMock = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  // Para receber um jogo salvo da DetalheScreen via route.params:
  // if (route.params?.novoJogo) { CONCLUIDO
  //   setItensSalvos(prev => [...prev, route.params.novoJogo]);
  // }
  if (route.params?.novoJogo) {
    setItensSalvos(prev => [...prev, route.params.novoJogo]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* TODO: renomeie o titulo para o seu tema CONCLUIDO */}
        <Text style={styles.headerTitulo}>Minha Lista</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // TODO: crie o arquivo src/components/CardJogo.js
          // O componente CardJogo deve receber as props: titulo, genero, plataforma e nota
          // Depois substitua este bloco por:
          // <CardJogo titulo={item.titulo} genero={item.genero} plataforma={item.plataforma} nota={item.nota} />
        <CardJogo titulo={item.titulo} genero={item.genero} plataforma={item.plataforma} nota={item.nota} />
         
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              {/* TODO: troque pela inicial do seu tema CONCLUIDO*/}
              <Text style={styles.icone}>G</Text>
            </View>
            <Text style={styles.titulo}>Nenhum jogo salvo</Text>
            <Text style={styles.descricao}>Sua lista aparecera aqui</Text>
            <Text style={styles.dica}>
              Acesse um jogo e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
      />
    </SafeAreaView>
  );
}

// TODO: ajuste as cores para o tema do seu app
const styles = StyleSheet.create({
  // Tela principal
  container: {
    flex: 1,
    backgroundColor: "#120F1D",
  },

  // Header
  header: {
    backgroundColor: "#1B1430",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#8B5CF6",
  },

  headerTitulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },

  // Lista vazia
  listaVazia: {
    flex: 1,
  },

  // Conteúdo central
  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  // Ícone
  iconeContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#8B5CF6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,

    shadowColor: "#8B5CF6",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },

  icone: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  // Textos
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },

  descricao: {
    fontSize: 16,
    color: "#C4B5FD",
    textAlign: "center",
    marginBottom: 12,
  },

  dica: {
    fontSize: 14,
    color: "#A78BFA",
    textAlign: "center",
    lineHeight: 22,
  },

  // Card (caso utilize nesta tela)
  card: {
    backgroundColor: "#241A3D",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#4C1D95",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  // Caso queira usar dentro do CardJogo
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  cardGenero: {
    fontSize: 14,
    color: "#C4B5FD",
    marginBottom: 4,
  },

  cardPlataforma: {
    fontSize: 14,
    color: "#C4B5FD",
    marginBottom: 8,
  },

  cardNota: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#A855F7",
  },
});