import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from './modal.styles';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
  children: ReactNode;
  saveButtonText?: string;
  cancelButtonText?: string;
}

export default function CustomModal({
  visible,
  onClose,
  onSave,
  title,
  children,
  saveButtonText = "Salvar",
  cancelButtonText = "Cancelar",
}: CustomModalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          {children} 
          <TouchableOpacity style={styles.saveButton} onPress={onSave}>
            <Text style={styles.saveButtonText}>{saveButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>{cancelButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
