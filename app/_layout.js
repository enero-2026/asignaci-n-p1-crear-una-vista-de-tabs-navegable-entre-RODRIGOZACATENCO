import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Layout() {
  const ruta = useRouter();

  const handleTabPress = (route, componentName) => {
    ruta.push({
      pathname: route,
      params: { componente: componentName }
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <Stack />
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navTab} 
          onPress={() => handleTabPress('/inicio', 'Componente Inicio')}
        >
          <Text style={styles.navTabText}>Inicio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navTab} 
          onPress={() => handleTabPress('/perfil', 'Componente Perfil')}
        >
          <Text style={styles.navTabText}>Perfil</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navTab} 
          onPress={() => handleTabPress('/buscar', 'Componente Buscar')}
        >
          <Text style={styles.navTabText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 25,
    paddingTop: 15,
  },
  navTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4f46e5',
  },
});