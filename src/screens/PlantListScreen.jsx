import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const MusicListScreen = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Função para buscar as Musicas do Firestore
    const fetchPlants = async () => {
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

        const db = firebase.firestore();

        const response = await db.collection('plants').get();

        const fetchedPlants = response.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPlants(fetchedPlants);
      } catch (error) {
        console.error('Erro ao buscar as música:', error);
        alert('Erro ao buscar as Musicas. Por favor, tente novamente.');
      }
    };

    // Chame a função para buscar as Musicas ao montar o componente
    fetchPlants();
  }, []);

  // Renderize um item da lista de Musicas
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.type}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Musicas</Text>
      {plants.length ? (
        <FlatList
          data={plants}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      ) : (
        <Text>Nenhuma Musicas encontrada</Text>
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

export default MusicListScreen;
