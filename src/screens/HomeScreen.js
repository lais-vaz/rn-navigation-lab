// TODO: estilizar esta tela com as cores e identidade visual do seu tema
// TODO: importar useState e useEffect — adicione a linha abaixo no topo: CONCLUIDO

import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { useState, useEffect } from 'react';

// TODO: substituir pelos jogos que voce escolheu
const jogos = [
  {
    id: '1',
    titulo: 'The Legend of Zelda: Breath of the Wild',
    genero: 'Aventura / Mundo Aberto',
    plataforma: 'Nintendo Switch',
    nota: '10/10',
    sinopse:
      'Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.',
  },
  {
    id: '2',
    titulo: 'Red Dead Redemption 2',
    genero: 'Acao / Mundo Aberto',
    plataforma: 'PS4 / Xbox / PC',
    nota: '10/10',
    sinopse:
      'Uma epica historia sobre a vida fora da lei no coracao da America. Viva a aventura de Arthur Morgan no velho oeste em um mundo detalhado e imersivo.',
  },
  {
    id: '3',
    titulo: 'God of War',
    genero: 'Acao / Aventura',
    plataforma: 'PS4 / PC',
    nota: '10/10',
    sinopse:
      'Kratos e seu filho Atreus embarcam em uma jornada pelos Nove Reinos da mitologia nordica. Um dos jogos mais premiados de sua geracao.',
  },
  {
    id: '4',
    titulo: 'Hollow Knight',
    genero: 'Metroidvania / Plataforma',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Explore um vasto reino subterraneo habitado por insetos. Um desafio preciso e belo, com um mundo imenso para descobrir.',
  },
  {
    id: '5',
    titulo: 'Celeste',
    genero: 'Plataforma / Indie',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Ajude Madeline a sobreviver sua viagem interior pela montanha Celeste. Um platformer desafiador com uma historia tocante sobre superacao.',
  },
  {
    id: '6',
    titulo: 'Stardew Valley',
    genero: 'Simulacao / RPG',
    plataforma: 'PC / Switch / Mobile',
    nota: '9/10',
    sinopse:
      'Herde a fazenda do seu avo e comece uma nova vida. Plante, colete, construa relacionamentos e explore cavernas neste mundo relaxante.',
  },
];

//adicionar { navigation } como parametro quando a navegacao estiver configurada CONCLUIDO
export default function HomeScreen({navigation}) {
   //estado para o texto digitado na busca
  // const [busca, setBusca] = useState(''); CONCLUIDO
  const [busca, setBusca] = useState('');

    //estado com os jogos exibidos na lista — inicia com todos
    // const [jogosFiltrados, setJogosFiltrados] = useState(jogos); CONCLUIDO
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos); 



  // TODO: filtrar os jogos sempre que o valor de 'busca' mudar CONCLUIDO
  // useEffect(() => {
  //   const resultado = jogos.filter((jogo) =>
  //     jogo.titulo.toLowerCase().includes(busca.toLowerCase())
  //   );
  //   setJogosFiltrados(resultado);
  // }, [busca]);
  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
    jogo.titulo.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
  );
  setJogosFiltrados(resultado);
  }, [busca]);


  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        //implementar onPress com navigation.navigate passando os dados do jogo
        // onPress={() => navigation.navigate('Detalhe', { ...item })} CONCLUIDO
        onPress={() => navigation.navigate('Detalhe',{...item})}
        
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Catalogo de Games</Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para ver os detalhes
        </Text>
      </View>

      {/* Campo de busca — TODO: adicionar value={busca} e onChangeText={setBusca} */}
      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          // value={busca}
          // onChangeText={setBusca}
          value={busca}
          onChangeText={setBusca} // atualiza
          
        />
      </View>

      {/* TODO: trocar data={jogos} por data={jogosFiltrados} apos implementar o estado CONCLUIDO*/} 
      <FlatList
        data={jogosFiltrados} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// TODO: estilizar com as cores e identidade visual do seu tema
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120F1D",
  },

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

  headerSubtitulo: {
    fontSize: 14,
    color: "#C4B5FD",
    marginTop: 6,
  },

  buscaContainer: {
    backgroundColor: "#120F1D",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  buscaInput: {
    backgroundColor: "#241A3D",
    borderWidth: 1,
    borderColor: "#4C1D95",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: "#FFFFFF",
  },

  lista: {
    padding: 16,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#241A3D",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#4C1D95",

    shadowColor: "#8B5CF6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },

  cardIcone: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#8B5CF6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  cardIconeTexto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  cardSubtitulo: {
    fontSize: 14,
    color: "#C4B5FD",
  },
});