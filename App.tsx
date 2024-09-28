import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetalhesTarefasScreen from './DetalhesTarefaScreen '; // Sua tela de lista de tarefas
import TarefaScreen from './TarefasScreen'; // Tela de detalhes da tarefa

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaTarefas">
        <Stack.Screen name="ListaTarefas" component={TarefaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TarefaDetalhes" component={DetalhesTarefasScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}