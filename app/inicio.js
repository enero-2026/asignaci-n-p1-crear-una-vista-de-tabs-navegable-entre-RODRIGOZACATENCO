import { View, Text, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function Inicio() {
  const { componente = 'Inicio' } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Inicio' }} />
      <View style={styles.container}>
        <Text style={styles.title}>{componente}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});