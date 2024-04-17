import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PlantingFormScreen = () => {
  const [plantName, setPlantName] = useState('');
  const [plantType, setPlantType] = useState('');
  const [plantDate, setPlantDate] = useState('');

  const handleSubmit = () => {
    // Implemente a lógica para enviar os dados do plantio para o Firebase ou outro serviço
    console.log('Nome da Musica:', plantName);
    console.log('Tipo de Musica:', plantType);
    console.log('Data do plantio:', plantDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Musica</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Musica"
        value={plantName}
        onChangeText={setPlantName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Musica"
        value={plantType}
        onChangeText={setPlantType}
      />
      <TextInput
        style={styles.input}
        placeholder="Data da musica"
        value={plantDate}
        onChangeText={setPlantDate}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
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
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlantingFormScreen;
