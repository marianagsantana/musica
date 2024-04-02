import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Trebuchet MS',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff', // Azul para títulos
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'Trebuchet MS',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745', // Verde para subtítulos
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Trebuchet MS',
    fontSize: 14,
    color: '#6c757d', // Cinza para texto comum
  },
});

export default styles;
