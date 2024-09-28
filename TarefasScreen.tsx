import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign, Ionicons } from '@expo/vector-icons'; // Ícones

interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  prazo?: string;
  data: string;
}

export default function TarefasScreen() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const adicionarTarefa = () => {
    if (novoTitulo && novaDescricao) {
      const novaTarefa = {
        id: Math.random().toString(),
        titulo: novoTitulo,
        descricao: novaDescricao,
        data: new Date().toLocaleDateString(),
      };
      const tarefasAtualizadas = [...tarefas, novaTarefa];
      setTarefas(tarefasAtualizadas);
      salvarTarefas(tarefasAtualizadas);
      setNovoTitulo('');
      setNovaDescricao('');
      setModalVisible(false); // Fecha o modal após adicionar
    }
  };

  const salvarTarefas = async (tarefasAtualizadas: Tarefa[]) => {
    try {
      await AsyncStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
    } catch (e) {
      console.log('Erro ao salvar tarefas:', e);
    }
  };

  const renderTarefa = ({ item }: { item: Tarefa }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.description}>{item.descricao}</Text>
      <Text style={styles.date}>Criado em {item.data}</Text>
      <TouchableOpacity onPress={() => removerTarefa(item.id)}>
        <Ionicons name="trash-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const removerTarefa = (id: string) => {
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);
    salvarTarefas(tarefasAtualizadas);
  };

  return (
    <View style={styles.container}>
      {/* Header com o logo */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color="#0056D2" />
        <Text style={styles.headerTitle}>LISTA DE TAREFAS</Text>
      </View>

      {/* Lista de tarefas */}
      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Botão suspenso para adicionar nova tarefa */}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Modal para adicionar tarefa */}
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

            {/* Prazo e adicionar imagem */}
            <View style={styles.optionalFields}>
              <TouchableOpacity style={styles.optionalButton}>
                <Ionicons name="calendar-outline" size={24} color="#fff" />
                <Text style={styles.optionalButtonText}>Prazo (Opcional)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionalButton}>
                <Ionicons name="image-outline" size={24} color="#fff" />
                <Text style={styles.optionalButtonText}>Adicionar IMG (Opcional)</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addTaskButton} onPress={adicionarTarefa}>
              <Text style={styles.addTaskButtonText}>Adicionar Tarefa</Text>
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
    flexDirection: 'row',
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
});
