import { View, Text } from 'react-native';
import Task from './src/components/Task';
import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

// Evita que a splash screen desapareça automaticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
  // Carregue as fontes
  const [fontsLoaded] = useFonts({
    //'Montserrat-Regular': require('./assets/fonts/static/Montserrat-Regular.ttf'), // Atualize o caminho
    'Montserrat': require('./assets/fonts/Montserrat.ttf'), 
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Esconde a splash screen depois que a fonte carrega
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Não renderize nada até a fonte carregar
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Task title="TITULO" detail="Descrição da tarefa 1" date="10/06/2021" />
      <Task title="Tarefa 2" detail="Descrição da tarefa 2" date="10/06/2021" />
      <Task title="TITULO 3" detail="Pequena descrição " date="10/06/2021" />
    </View>
  );
}
