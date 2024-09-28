import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
}

export default function TarefaDetalhes() {
  const navigation = useNavigation();
  const route = useRoute();
  const { tarefa }: { tarefa: Tarefa } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(tarefa.titulo);
  const [novaDescricao, setNovaDescricao] = useState(tarefa.descricao);

  const editarTarefa = () => {
    // Lógica para salvar a tarefa editada
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>

      {/* Título e descrição da tarefa */}
      <Text style={styles.title}>{tarefa.titulo}</Text>
      <Text style={styles.description}>{tarefa.descricao}</Text>

      {/* Data de criação */}
      <Text style={styles.date}>Criado em {tarefa.data}</Text>

      {/* Botão para editar */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="pencil-outline" size={24} color="#0056D2" />
        </TouchableOpacity>
      </View>

      {/* Modal de edição */}
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
              value={novoTitulo}
              onChangeText={setNovoTitulo}
              style={styles.input}
              placeholderTextColor="#fff"
            />
            <TextInput
              placeholder="Descrição"
              value={novaDescricao}
              onChangeText={setNovaDescricao}
              style={[styles.input, { height: 80 }]}
              multiline
              placeholderTextColor="#fff"
            />

            <TouchableOpacity style={styles.saveButton} onPress={editarTarefa}>
              <Text style={styles.saveButtonText}>Salvar Alterações</Text>
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
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  date: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
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
