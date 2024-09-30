import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo semi-transparente
  },
  modalContent: {
    backgroundColor: '#0056D2', // Mesma cor de fundo (#0056D2)
    padding: 20,
    borderTopLeftRadius: 20, // Canto arredondado no topo esquerdo
    borderTopRightRadius: 20, // Canto arredondado no topo direito
    paddingBottom: 40, // Espaço inferior
  },
  title: {
    fontSize: 24, // Tamanho do título
    fontWeight: 'bold',
    color: '#fff', // Cor branca para o título
    marginBottom: 20, // Espaçamento inferior
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff', // Bordas brancas
    color: '#fff', // Texto branco
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#fff', // Fundo branco
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', // Centraliza o texto dentro do botão
    marginTop: 10,
  },
  saveButtonText: {
    color: '#0056D2', // Texto azul
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center', // Centraliza o texto do botão
  },
  cancelButtonText: {
    color: '#fff', // Texto branco
    fontWeight: 'bold',
  },
});

export default styles;
