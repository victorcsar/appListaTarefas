import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import styles from './DetalhesTarefaScreen.styles';
import CustomModal from '../../components/modal/modal';

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
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleEdit}
        title="Editar Tarefa"
        saveButtonText="Salvar Alterações"
      >
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
      </CustomModal>
    </View>
  );
}

