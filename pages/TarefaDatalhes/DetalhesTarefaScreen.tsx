import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './DetalhesTarefaScreen.styles';
import CustomModal from '../../components/modal/modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Tarefa {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
}

interface TarefaDetalhesProps {
  route: { params: { tarefa: Tarefa; removerTarefa: (id: string) => void; salvarTarefa: (tarefaAtualizada: Tarefa) => void; setTarefas: (tarefas: Tarefa[]) => void } };
}

export default function TarefaDetalhesScreen({ route }: TarefaDetalhesProps) {
  const { tarefa, removerTarefa, salvarTarefa } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Hook para navegação

  const tarefaSchema = Yup.object().shape({
    titulo: Yup.string().required('O título é obrigatório').min(3, 'O título deve ter pelo menos 3 caracteres'),
    descricao: Yup.string().required('A descrição é obrigatória').min(5, 'A descrição deve ter pelo menos 5 caracteres'),
  });

  const handleRemoveTarefa = () => {
    removerTarefa(tarefa.id); // Remove a tarefa
    navigation.goBack(); // Volta para a lista de tarefas
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>APP LISTA TAREFAS</Text>
        </View>
      </SafeAreaView>

      <View style={styles.containerDetalhes}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <AntDesign name="arrowleft" size={25} color="#0056D2" />
          </TouchableOpacity>

          <View style={styles.buttonContainer2}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <AntDesign name="edit" size={25} color="#0056D2" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRemoveTarefa}>
              <AntDesign name="delete" size={25} color="#0056D2" />
            </TouchableOpacity>
            
          </View>

        </View>
        <Text style={styles.title}>{tarefa.titulo}</Text>
        <Text style={styles.description}>{tarefa.descricao}</Text>
        <View style={styles.containerData}>
          <Text style={styles.date}>Criado em: {tarefa.data}</Text>
        </View>
      </View>

      {/* Modal para editar tarefa */}
      <Formik
        initialValues={{ titulo: tarefa.titulo, descricao: tarefa.descricao }}
        validationSchema={tarefaSchema}
        onSubmit={(values) => {
          const tarefaAtualizada = { ...tarefa, ...values };
          salvarTarefa(tarefaAtualizada);
          setModalVisible(false); // Fecha o modal após salvar
          navigation.goBack(); // Volta para a lista de tarefas
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
            title="Editar Tarefa"
            saveButtonText="Salvar Alterações"
            onSave={handleSubmit}
          >
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
          </CustomModal>
        )}
      </Formik>
    </View>
  );
}
