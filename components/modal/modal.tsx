import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './modal.styles';


interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  saveButtonText: string;
  onSave: () => void; // Atualizado para ser acionado pelo Formik
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title,
  saveButtonText,
  onSave,
  children
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>

          {children}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={onSave}>
              <Text style={styles.saveButtonText}>{saveButtonText}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
