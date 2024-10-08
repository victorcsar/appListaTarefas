import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerDetalhes:{
    flex: 1,
    padding: 20,
    gap: 10,
  },
  containerData:{
    alignItems: 'center',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 4,
  },
  backButton: {
    fontSize: 24,
    color: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  description: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
  },
  date: {
    fontSize: 14,
    color: '#888888',
    marginTop: 'auto',
    marginBottom: 10,
  },
  icon: {
    marginLeft: 15,
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonContainer2:{
    flexDirection: 'row',
    alignItems: 'center',
    gap:25
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0056D2',
  },
});

export default styles;