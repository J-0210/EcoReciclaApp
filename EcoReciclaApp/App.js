import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

export default function App() {
  const [sensores, setSensores] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('http://70.30.7.144:3000/sensores')
      .then(res => res.json())
      .then(data => {
        setSensores(data);
        setCargando(false);
      })
      .catch(err => {
        console.log(err);
        setCargando(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EcoRecicla - Sensores IoT</Text>
      {cargando ? (
        <ActivityIndicator size="large" color="#00aa00" />
      ) : (
        <FlatList
          data={sensores}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.barrio}>Barrio: {item.barrio}</Text>
              <Text>Nivel: {item.nivel}%</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  item: { padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' },
  barrio: { fontWeight: 'bold' },
});
