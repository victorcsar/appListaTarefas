import styles from './Checkbox.styles';
import React, { useState } from 'react';
import {Text, TouchableOpacity, View } from 'react-native';

const CheckboxPerson: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const cor = isChecked? "checkbox" : 'checkboxOff';

  return (
    <View style={styles.container}>

      <TouchableOpacity style={isChecked ? styles.checkbox : styles.checkboxOff} onPress={toggleCheckbox}>
        {isChecked && <View style={styles.checkedIcon} />}
      </TouchableOpacity>
      <Text style={styles.label}>
        {isChecked ? 'Checkbox marcado!' : 'Checkbox desmarcado'}
      </Text>
    </View>
  );
};

export default CheckboxPerson;
