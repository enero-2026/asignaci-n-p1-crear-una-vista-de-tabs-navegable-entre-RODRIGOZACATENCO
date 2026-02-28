import { View, Text, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function Detalle() {
  const { nombre = 'N/A', matricula = 'N/A' } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: nombre }} />
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imagePlaceholder} />
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{nombre}</Text>
            <Text style={styles.label} >Matrícula:</Text>
            <Text style={styles.value}>{matricula}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#e0e0e0',
    borderRadius: 60,
    marginBottom: 16,
  },
  infoContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginTop: 4,
  },
});