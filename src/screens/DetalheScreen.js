// TODO: estilizar esta tela com as cores e identidade visual do seu tema
// TODO: importar useState — adicione a linha abaixo no topo:

// import { useState } from 'react'; CONCLUIDO
import { useState } from "react";

import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

// Dados de fallback — usados enquanto a navegacao nao estiver configurada
const jogoMock = {
  titulo: "The Legend of Zelda: Breath of the Wild",
  genero: "Aventura / Mundo Aberto",
  plataforma: "Nintendo Switch",
  nota: "10/10",
  sinopse:
    "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
};

// TODO: adicionar { route, navigation } como parametros quando a navegacao estiver configurada
// Os dados chegam via route.params quando o usuario toca em um jogo na HomeScreen
export default function DetalheScreen() {
  // Defina os parâmetros de rota, pegando todos os campos presentes no objeto JOGOS definido na HomeScreen
  // const { titulo... } = route?.params ?? jogoMock; CONCLUIDO
  const { titulo, genero, plataforma, nota, sinopse} = route?.params?? jogoMock;

  // TODO: estado booleano para controlar se o jogo foi salvo na lista
  // const [isSalvo, setIsSalvo] = useState(false); CONCLUIDO
  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema CONCLUIDO*/}
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>{titulo[0]}</Text>
          </View>
          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>
          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>
            <View style={styles.metaSeparador} />
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>

        {/* TODO: quando implementar o estado isSalvo, use: CONCLUIDO
            onPress={() => setIsSalvo(prev => !prev)}
            style={[styles.botao, isSalvo && styles.botaoAtivo]}
            texto: isSalvo ? 'Remover da Lista' : 'Adicionar a Lista' */}
            onPress={() => setIsSalvo(prev => !prev)}
            style={[styles.botao, isSalvo && styles.botaoAtivo]}
            texto: isSalvo ? 'Remover da lista': 'Adicionar a lista'

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Adicionar a Lista</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120F1D",
  },

  hero: {
    backgroundColor: "#1B1430",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#8B5CF6",
  },

  heroIcone: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#8B5CF6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,

    shadowColor: "#8B5CF6",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },

  heroIconeTexto: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  heroTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 6,
  },

  heroSubtitulo: {
    fontSize: 15,
    color: "#C4B5FD",
    marginBottom: 18,
  },

  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#241A3D",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "#4C1D95",
  },

  metaItem: {
    alignItems: "center",
  },

  metaLabel: {
    fontSize: 12,
    color: "#A78BFA",
    marginBottom: 4,
  },

  metaValor: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  metaSeparador: {
    width: 1,
    height: 30,
    backgroundColor: "#4C1D95",
    marginHorizontal: 20,
  },

  secao: {
    margin: 16,
    backgroundColor: "#241A3D",
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: "#4C1D95",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },

  detalheTexto: {
    fontSize: 15,
    color: "#C4B5FD",
    lineHeight: 24,
  },

  botao: {
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 32,
    backgroundColor: "#8B5CF6",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",

    shadowColor: "#8B5CF6",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },

  botaoAtivo: {
    backgroundColor: "#6D28D9",
  },

  botaoTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});