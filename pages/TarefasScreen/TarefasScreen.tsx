import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign, Ionicons } from '@expo/vector-icons'; // Ícones
import styles from './TarefaScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CustomModal from '../../components/modal/modal';

interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
}

export default function TarefasScreen() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  // Função para carregar as tarefas salvas ao abrir o app
  const carregarTarefas = async () => {
    try {
      const tarefasSalvas = await AsyncStorage.getItem('tarefas');
      if (tarefasSalvas) {
        setTarefas(JSON.parse(tarefasSalvas));
      }
    } catch (e) {
      console.log('Erro ao carregar tarefas:', e);
    }
  };

  // useEffect para carregar as tarefas ao abrir o app
  useEffect(() => {
    carregarTarefas();
  }, []);

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
    <TouchableOpacity onPress={() => navigation.navigate("TarefaDetalhes", {
      tarefa: item,
      removerTarefa,
      salvarTarefa: (tarefaAtualizada: Tarefa) => {
        const tarefasAtualizadas = tarefas.map(tarefa =>
          tarefa.id === tarefaAtualizada.id ? tarefaAtualizada : tarefa
        );
        setTarefas(tarefasAtualizadas); // Atualiza o estado local
        salvarTarefas(tarefasAtualizadas); // Salva no AsyncStorage
      },
      setTarefas // Passa a função setTarefas
    })}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.description}>{item.descricao}</Text>
        <View style={styles.dateEbutton}>
          <Text style={styles.date}>Criado em {item.data}</Text>
          <TouchableOpacity onPress={() => removerTarefa(item.id)}>
            <Ionicons name="trash-outline" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );


  const removerTarefa = (id: string) => {
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);
    salvarTarefas(tarefasAtualizadas);
  };

  return (
    <View style={styles.container}>
      {/* Header com o logo */}
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>LISTA DE TAREFAS</Text>
        </View>
      </SafeAreaView>
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
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={adicionarTarefa}
        title="Adicionar Tarefa"
        saveButtonText="Adicionar Tarefa"
      >
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
      </CustomModal>
    </View>
  );
}
