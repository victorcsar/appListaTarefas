import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Ionicons } from '@expo/vector-icons'; // Importando os ícones

export default function DetalhesTarefaScreen({ route, navigation }: any) {
  const { tarefa, removerTarefa } = route.params; // Recebe os detalhes da tarefa através dos parâmetros da rota

  const handleDelete = () => {
    removerTarefa(tarefa.id); // Chama a função para remover a tarefa
    navigation.goBack(); // Volta para a tela anterior
  };

  const handleEdit = () => {
    // Adicione sua lógica de edição aqui
    console.log("Editar tarefa");
  };


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{tarefa.titulo}</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleEdit}>
              <AntDesign name="edit" size={24} color="#007AFF" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Ionicons name="trash-outline" size={24} color="#FF3B30" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>{tarefa.descricao}</Text>
        <Text style={styles.date}>Criado em {tarefa.data}</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Cor de fundo branco
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    color: '#007AFF', // Cor do botão voltar
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Cor do título
  },
  description: {
    fontSize: 16,
    color: '#333333', // Cor da descrição
    marginBottom: 20,
  },
  date: {
    fontSize: 14,
    color: '#888888', // Cor da data
    marginTop: 'auto',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15, // Espaçamento entre os ícones
  },
});
