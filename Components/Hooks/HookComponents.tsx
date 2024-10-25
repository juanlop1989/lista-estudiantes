import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../../Modelos/estudiante';



export default function HookComponents() {

  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [alternar, setAlternar] = useState<boolean>(true);
  const [segundos, setSegundos] = useState<number>(5); 

     // Lista inicial
  const listaEstudiantes1: Estudiante[] = [
    { id: 1, nombre: "Juan López" },
    { id: 2, nombre: "Denis Romero" },
    { id: 3, nombre: "Mario Alonzo" },
    { id: 4, nombre: "Obed Olmedo" },
    { id: 5, nombre: "Carolina Reyes" },
    { id: 6, nombre: "Diana Hernandez" },
    { id: 7, nombre: "Olivia Ocampo" },
    { id: 8, nombre: "Erick Vallecillo" },
    { id: 9, nombre: "Oscar Ortiz" },
    { id: 10, nombre: "Cesar Flores" }
  ];

  // Nueva lista que se alternará
  const listaEstudiantes2: Estudiante[] = [
    { id: 11, nombre: "Joselyn Alvarado" },
    { id: 12, nombre: "Nohamy Hernandez" },
    { id: 13, nombre: "Hanseph Garcia" },
    { id: 14, nombre: "Cintya Zapata" },
    { id: 15, nombre: "Gemmy Rivera" },
    { id: 16, nombre: "Diana Hernandez" },
    { id: 17, nombre: "Rosario Maldonado" },
    { id: 18, nombre: "Luis Borjas" },
    { id: 19, nombre: "Carlos Silva" },
    { id: 20, nombre: "Denilson Acosta" }
  ];


  useEffect(() => {

    
    // Alternar entre las dos listas cada 5 segundos
    const interval = setInterval(() => {
      setEstudiantes(alternar ? listaEstudiantes2 : listaEstudiantes1);
      setAlternar(!alternar); 
      setSegundos(6); 
    }, 5000); 

    
    return () => clearInterval(interval);
  }, [alternar]); 

  useEffect(() => {
    
    const contador = setInterval(() => {
      setSegundos((segundos) => (segundos > 0 ? segundos - 1 : 6));
    }, 1000); 

    
    return () => clearInterval(contador);
  }, []);

 // Definimos la función renderItem dentro del componente
 const renderItem = ({ item }: { item: Estudiante }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.nombre}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header} >Listado de Estudiantes</Text>

      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Nombre</Text>
      </View>

      <FlatList
        data={estudiantes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

    <Text>Actualizando lista en {segundos} segundos...</Text>

    </View>
    
  )
}


// Estilos
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f8f8',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    tableHeader: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      paddingBottom: 10,
      marginBottom: 10,
    },
    headerCell: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    cell: {
      flex: 1,
      textAlign: 'center',
      fontSize: 16,
    },
  });