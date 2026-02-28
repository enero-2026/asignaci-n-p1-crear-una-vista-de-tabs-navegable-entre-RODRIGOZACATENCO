import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const ruta = useRouter();
  const alumnos = [
    { matricula: '2114354', nombre: 'CANDELARIA MORA SAMANTHA' },
    { matricula: '2121179', nombre: 'AGUILAR ORTIZ LUIS ROLANDO' },
    { matricula: '2048051', nombre: 'BARRIENTOS GALLEGOS DIEGO' },
    { matricula: '1979822', nombre: 'CANO MONTIEL KELLY YISSETH' },
    { matricula: '2111889', nombre: 'CANTU SILVA JAVIER' },
    { matricula: '2069119', nombre: 'CARMONA LOZANO ANGEL EMILIANO' },
    { matricula: '2132842', nombre: 'CASTILLO ACOSTA JORGE' },
    { matricula: '1994122', nombre: 'DAVILA GONZALEZ ALDO ADRIAN' },
    { matricula: '2018230', nombre: 'DURAN BARRIENTOS FABRIZIO' },
    { matricula: '2104564', nombre: 'FLORES GONZALEZ SEBASTIAN' },
    { matricula: '2066033', nombre: 'FLORES LÓPEZ DIEGO' },
    { matricula: '2132976', nombre: 'FLORES MARTINEZ ERICK ADRIAN' },
    { matricula: '2066114', nombre: 'GARZA AVALOS DIEGO' },
    { matricula: '2031243', nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL' },
    { matricula: '2064733', nombre: 'GRANJA PEÑA DIEGO' },
    { matricula: '2094647', nombre: 'IBARRA RODRIGUEZ ALEXIS' },
    { matricula: '2005102', nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN' },
    { matricula: '2064574', nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA' },
    { matricula: '2024783', nombre: 'MIRELES VELAZQUEZ ALEJANDRO' },
    { matricula: '2066077', nombre: 'MONSIVAIS SALAZAR ANDRES' },
    { matricula: '2092151', nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA' },
    { matricula: '2103708', nombre: 'PEÑA MUNGARRO LUIS ANGEL' },
    { matricula: '2115192', nombre: 'PUENTE REYNOSO JULIO CESAR' },
    { matricula: '2103765', nombre: 'RAMIREZ LOPEZ BRYAN' },
    { matricula: '2056778', nombre: 'RAMOS AVILA LILIANA VALERIA' },
    { matricula: '2037503', nombre: 'RICO JAUREGUI MAURICIO' },
    { matricula: '2131513', nombre: 'RIVERA LUNA ADRIAN' },
    { matricula: '2013503', nombre: 'RIVERA REYNA JOSE EMILIO' },
    { matricula: '2004613', nombre: 'RODRIGUEZ OLVERA ROSA ISELA' },
    { matricula: '2133022', nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL' },
    { matricula: '2026061', nombre: 'SANCHEZ GALARZA JUAN CARLOS' },
    { matricula: '2095320', nombre: 'SOLIS ORTIZ ALFREDO' },
    { matricula: '2025350', nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL' },
    { matricula: '2103895', nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL' },
    { matricula: '1857791', nombre: 'ZACATENCO OLIVE RODRIGO' },
    { matricula: '2025218', nombre: 'ZAVALA CANTU TERESA MARGARITA' },
  ];

  const handleStudentPress = (alumno) => {
    ruta.push({
      pathname: '/detalle',
      params: { nombre: alumno.nombre, matricula: alumno.matricula }
    });
  };

  const handleTabPress = (componentName) => {
    ruta.push({
      pathname: '/detalle',
      params: { nombre: componentName, matricula: 'Navegación Tab' }
    });
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {alumnos.map((alumno) => (
          <View key={alumno.matricula} style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>{alumno.nombre}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleStudentPress(alumno)}
            >
              <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navTab} 
          onPress={() => handleTabPress('Inicio')}
        >
          <Text style={styles.navTabText}>Inicio</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navTab} 
          onPress={() => handleTabPress('Favoritos')}
        >
          <Text style={styles.navTabText}>Favoritos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navTab} 
          onPress={() => handleTabPress('Configuración')}
        >
          <Text style={styles.navTabText}>Configuración</Text>
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
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 90,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginRight: 12,
  },
  nameContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#4f46e5',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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