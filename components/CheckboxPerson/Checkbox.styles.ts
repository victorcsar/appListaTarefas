import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 5,
    borderColor: '#0063F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 5,
  },
  checkedIcon: {
    width: 10,
    height: 10,
    borderRadius: 2,
    backgroundColor: '#0063F6',
  },
  checkboxOff: {
    width: 30,
    height: 30,
    borderWidth: 5,
    borderColor: '#191970',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
  },
});

  export default styles;