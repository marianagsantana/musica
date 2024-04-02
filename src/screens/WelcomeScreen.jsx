import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TitleComponent from './TitleComponent';
import TextComponent from './TextComponent';
import ButtonComponent from './ButtonComponent';

const WelcomeScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <View style={styles.container}>
            <TitleComponent title="Musics!" />
            <TextComponent text="Seu aplicativo de músicas" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WelcomeScreen;