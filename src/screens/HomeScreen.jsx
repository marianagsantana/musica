import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextComponent from '../components/TextComponent';
import TitleComponent from '../components/TitleComponent';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/plantacao.png')} style={styles.background}>
      <View style={styles.container}>
        <TitleComponent title="Bem-vindo" />
        <ButtonComponent
          title="Cadastro de música"
          onPress={() => navigation.navigate('MusicForm')}
        />
        <ButtonComponent
          title="Cadastro de PlayLists"
          onPress={() => navigation.navigate('PlayListForm')}
        />
        <ButtonComponent
          title="Lista de músicas"
          onPress={() => navigation.navigate('MusicList')}
        />
        <ButtonComponent
          title="Lista de PlayLists"
          onPress={() => navigation.navigate('PlayListsList')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
