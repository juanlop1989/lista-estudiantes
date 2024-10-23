import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../../Modelos/estudiante';



export default function HookComponents() {

  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);

  useEffect(()=>{
    const listaEstudiantes: Estudiante [] = [
        {id: 1, nombre: "Juan López"},
        {id: 2, nombre: "Denis Romero"},
        {id: 3, nombre: "Mario Alonzo"},
        {id: 4, nombre: "Obed Olmedo"},
        {id: 5, nombre: "Carolina Reyes"},
        {id: 6, nombre: "Diana Hernandez"},
        {id: 7, nombre: "Olivia Ocampo"},
        {id: 8, nombre: "Erick Vallecillo"},
        {id: 9, nombre: "Oscar Ortiz"},
        {id: 10, nombre: "Cesar Flores"}
    ];
    setEstudiantes(listaEstudiantes);
  })

/**
 <ul>
        {estudiantes.map((Name) => (
          <li key={Name.id}>
            {Name.id} - {Name.nombre}
          </li>
        ))}
      </ul>
*/


 // Definimos la función renderItem dentro del componente
 const renderItem = ({ item }: { item: Estudiante }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.nombre}</Text>
    </View>
  );


  //Actualizar lista
  


  return (
    <View style={styles.container}>
      <Text style={styles.header} >Listado de Estudiantes</Text>

      {/* Cabecera de la tabla */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Nombre</Text>
      </View>

     {/* Lista de nombres renderizada en una tabla */}
   
      <FlatList
        data={estudiantes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

    <Text>Actualizando lista en: </Text>

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