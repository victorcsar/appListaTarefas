import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; // Ícones
import styles from './TarefaScreen.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CustomModal from '../../components/modal/modal';
import * as Yup from 'yup';
import { Formik } from 'formik';

interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  concluida: boolean;
}

export default function TarefasScreen() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
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

  const adicionarTarefa = (values: { titulo: string; descricao: string }) => {
    const novaTarefa = {
      id: Math.random().toString(),
      titulo: values.titulo,
      descricao: values.descricao,
      data: new Date().toLocaleDateString(),
      concluida: false,
    };
    const tarefasAtualizadas = [...tarefas, novaTarefa];
    setTarefas(tarefasAtualizadas);
    salvarTarefas(tarefasAtualizadas);
    setModalVisible(false);
  };

  const salvarTarefas = async (tarefasAtualizadas: Tarefa[]) => {
    try {
      await AsyncStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
    } catch (e) {
      console.log('Erro ao salvar tarefas:', e);
    }
  };

  const removerTarefa = (id: string) => {
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);
    salvarTarefas(tarefasAtualizadas);
  };

  const alternarConclusaoTarefa = (id: string) => {
    const tarefasAtualizadas = tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
    salvarTarefas(tarefasAtualizadas);
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
      <View style={[styles.card, item.concluida && styles.cardConcluida]}>
        <View style={styles.checkboxContainer}>
          <View style={styles.textContainer}>
            <Text style={[styles.title, item.concluida && styles.titleConcluida]}>
              {item.titulo}
            </Text>
            <Text style={[styles.description, item.concluida && styles.descriptionConcluida]}>
              {item.descricao}
            </Text>
          </View>
          <TouchableOpacity onPress={() => alternarConclusaoTarefa(item.id)}>
            <AntDesign
              name={item.concluida ? "checkcircle" : "checkcircleo"}
              size={25}
              color={item.concluida ? "#00FF00" : "#fff"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dateEbutton}>
          <Text style={styles.date}>Criado em {item.data}</Text>
          <TouchableOpacity onPress={() => removerTarefa(item.id)}>
            <AntDesign name="delete" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const tarefaSchema = Yup.object().shape({
    titulo: Yup.string().required('O título é obrigatório').min(3, 'O título deve ter pelo menos 3 caracteres'),
    descricao: Yup.string().required('A descrição é obrigatória').min(5, 'A descrição deve ter pelo menos 5 caracteres'),
  });

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>APP LISTA TAREFAS</Text>
        </View>
      </SafeAreaView>

      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Modal para adicionar tarefa */}
      <Formik
        initialValues={{ titulo: '', descricao: '' }}
        validationSchema={tarefaSchema}
        onSubmit={(values, { resetForm }) => {
          adicionarTarefa(values);
          resetForm();
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <CustomModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onSave={handleSubmit}
            title="Adicionar Tarefa"
            saveButtonText="Adicionar Tarefa"
          >
            <>
              <TextInput
                placeholder="Título"
                value={values.titulo}
                onChangeText={handleChange('titulo')}
                onBlur={handleBlur('titulo')}
                style={styles.input}
                placeholderTextColor="#fff"
              />
              {touched.titulo && errors.titulo && (
                <Text style={styles.errorText}>{errors.titulo}</Text>
              )}

              <TextInput
                placeholder="Descrição"
                value={values.descricao}
                onChangeText={handleChange('descricao')}
                onBlur={handleBlur('descricao')}
                style={[styles.input, { height: 80 }]}
                multiline
                placeholderTextColor="#fff"
              />
              {touched.descricao && errors.descricao && (
                <Text style={styles.errorText}>{errors.descricao}</Text>
              )}
            </>
          </CustomModal>
        )}
      </Formik>
    </View>
  );
}
