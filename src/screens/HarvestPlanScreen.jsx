/*import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const HarvestPlanScreen = () => {
  const [harvestPlan, setHarvestPlan] = useState([]);

  useEffect(() => {
    // Função para buscar o planejamento de colheita do Firestore
    const fetchHarvestPlan = async () => {
      try {
        // Inicialize o Firebase se ainda não estiver inicializado
       / if (!firebase.apps.length) {
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

        // Busque o planejamento de colheita da coleção 'harvestPlan'
        const response = await db.collection('harvestPlan').get();

        // Mapeie os documentos retornados para extrair os dados do planejamento de colheita
        const fetchedHarvestPlan = response.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Atualize o estado com o planejamento de colheita obtido do Firestore
        setHarvestPlan(fetchedHarvestPlan);
      } catch (error) {
        console.error('Erro ao buscar o planejamento de colheita:', error);
        // Informe ao usuário sobre o erro ocorrido
        alert('Erro ao buscar o planejamento de colheita. Por favor, tente novamente.');
      }
    };

    // Chame a função para buscar o planejamento de colheita ao montar o componente
    fetchHarvestPlan();
  }, []);

  // Renderize um item da lista de planejamento de colheita
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.plantName}</Text>
      <Text>{item.harvestDate}</Text>
      <Text>{item.harvestQuantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planejamento de Colheita</Text>
      {harvestPlan.length ? (
        <FlatList
          data={harvestPlan}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      ) : (
        <Text>Nenhum planejamento de colheita encontrado</Text>
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

export default HarvestPlanScreen;
