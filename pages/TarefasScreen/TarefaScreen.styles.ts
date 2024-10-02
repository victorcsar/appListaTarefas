import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
      elevation: 4,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0056D2',
    },
    listContainer: {
      paddingHorizontal: 20,
      paddingBottom: 60, 
    },
    card: {
      backgroundColor: '#00239C',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    description: {
      fontSize: 14,
      color: '#E6E6FA',
      marginVertical: 5,
    },
    date: {
      fontSize: 12,
      color: '#E6E6FA',
    },
    addButton: {
      position: 'absolute',
      right: 20,
      bottom: 30,
      backgroundColor: '#0056D2',
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 8,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: '#0056D2',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingBottom: 40,
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      color: '#fff',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    optionalFields: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    optionalButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionalButtonText: {
      color: '#fff',
      marginLeft: 10,
    },
    addTaskButton: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    addTaskButtonText: {
      color: '#0056D2',
      fontWeight: 'bold',
    },
    cancelButton: {
      marginTop: 10,
      alignItems: 'center',
    },
    cancelButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    dateEbutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    errorText: {
      color: 'red', // Definindo a cor vermelha para o texto de erro
      fontSize: 12, // Tamanho da fonte para o texto de erro
      marginBottom: 10, // Espaço abaixo do erro
    },
    cardConcluida: {
      backgroundColor: '#026602', // Cor para card de tarefa concluída
      // #A9A9A9 cor cinza
    },
    titleConcluida: {
      textDecorationLine: 'line-through', // Risco no título da tarefa concluída
      color: '#D3D3D3', // Cor mais clara para o texto
    },
    descriptionConcluida: {
      textDecorationLine: 'line-through',
      color: '#D3D3D3',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
    },
  });

export default styles;