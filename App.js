import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function App() {

  
  
  const [db, setDb] = useState(null);
  
  useEffect(() => {
    
    //setDb(basedatos);
    const db = SQLite.openDatabaseAsync('usuarios.db');
    db.execAsync(`create table if not exists users (name TEXT)`)
    .then(() => {
      console.log('Table created successfully');
    })
    .catch(error => {
      console.error('Error creating table', error);
    });



/*

    basedatos.transaction(tx => {
      tx.executeSql(
        'create table if not exists users (name TEXT)',
        [],
        () => { console.log('Table created successfully'); },
        (_, error) => { console.error('Error creating table', error); }
      );
    });
    */
/*
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM users', null,
        (txObj, resultSet)=> {
          console.log('resultSet', resultSet)
        }
      )
    })
*/

  }, []);


  return (
    <View style={styles.container}>
      <Text>Usuarios</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
