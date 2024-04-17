import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const PlayListsListScreen = () => {
  const [plantings, setPlantings] = useState([]);

  useEffect(() => {
    // Função para buscar os plantios do Firestore
    const fetchPlantings = async () => {
      try {
        // Inicialize o Firebase se ainda não estiver inicializado
        if (!firebase.apps.length) {
          firebase.initializeApp({
            apiKey: 'SUA_API_KEY',
            authDomain: 'SEU_DOMÍNIO.firebaseapp.com',
            projectId: 'SEU_PROJECT_ID',
            storageBucket: 'SEU_STORAGE_BUCKET',
            messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
            appId: 'SEU_APP_ID',
            measurementId: 'SUA_MEASUREMENT_ID',
          });
        }

        // Acesse o Firestore
        const db = firebase.firestore();

        // Busque todos os plantios da coleção 'plantings'
        const response = await db.collection('plantings').get();

        // Mapeie os documentos retornados para extrair os dados dos plantios
        const fetchedPlantings = response.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Atualize o estado com os plantios obtidos do Firestore
        setPlantings(fetchedPlantings);
      } catch (error) {
        console.error('Erro ao buscar as musicas:', error);
        // Informe ao usuário sobre o erro ocorrido
        alert('Erro ao buscar as musicas. Por favor, tente novamente.');
      }
    };

    // Chame a função para buscar os plantios ao montar o componente
    fetchPlantings();
  }, []);

  // Renderize um item da lista de plantios
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.plantName}</Text>
      <Text>{item.plantingDate}</Text>
      <Text>{item.harvestDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Plantios</Text>
      {plantings.length ? (
        <FlatList
          data={plantings}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      ) : (
        <Text>Nenhum plantio encontrado</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default PlayListsListScreen;
