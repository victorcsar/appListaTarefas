import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function DetalhesTarefaScreen({ route, navigation }: any) {
  const { tarefa, removerTarefa, salvarTarefa } = route.params; // Recebe a tarefa e funções

  const [modalVisible, setModalVisible] = useState(false);
  const [titulo, setTitulo] = useState(tarefa.titulo);
  const [descricao, setDescricao] = useState(tarefa.descricao);

  const handleEdit = () => {
    if (titulo && descricao) {
      const tarefaAtualizada = { ...tarefa, titulo, descricao }; // Atualiza a tarefa
      salvarTarefa(tarefaAtualizada); // Chama a função para salvar a tarefa atualizada
      navigation.goBack(); // Volta para a tela anterior
    }
  };

  const handleDelete = () => {
    removerTarefa(tarefa.id); // Chama a função para remover a tarefa
    navigation.goBack(); // Volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{tarefa.titulo}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AntDesign name="edit" size={24} color="#007AFF" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Ionicons name="trash-outline" size={24} color="#FF3B30" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{tarefa.descricao}</Text>
        <Text style={styles.date}>Criado em {tarefa.data}</Text>
      </SafeAreaView>

      {/* Modal para editar tarefa */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Título"
              value={titulo}
              onChangeText={setTitulo}
              style={styles.input}
              placeholderTextColor="#fff"
            />
            <TextInput
              placeholder="Descrição"
              value={descricao}
              onChangeText={setDescricao}
              style={[styles.input, { height: 80 }]}
              multiline
              placeholderTextColor="#fff"
            />
            <TouchableOpacity style={styles.addTaskButton} onPress={handleEdit}>
              <Text style={styles.addTaskButtonText}>Salvar Alterações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
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
    color: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
  },
  date: {
    fontSize: 14,
    color: '#888888',
    marginTop: 'auto',
    marginBottom: 10,
  },
  icon: {
    marginLeft: 15,
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
});
