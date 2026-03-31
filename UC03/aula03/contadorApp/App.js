import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);
  
  const capacidadeMaxima = 18;

  let mensagem = "";

  function incrementar(){
    if(contador < capacidadeMaxima){
      setContador(contador + 1);
    }
  }

  function decrementar(){
    if(contador > 0){
      setContador(contador - 1);
    }
  }

    function zerar(){
      setContador(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.contador}>{contador}</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>

      <View style={styles.botoes}>

        <TouchableOpacity
          style={styles.botao}
          onPress={decrementar}
        >
          <Text>-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.botao}
          onPress={incrementar}
        >
          <Text>+</Text>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity 
        style={styles.botaoZerar}
        onPress={zerar}
      >
        <Text>Zerar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 40,
    fontWeight:'bold',
    marginBottom: 20,
  },

  contador: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  mensagem: {
    fontSize: 18,
    color: "#cc482eff",
    fontWeight: 'bold',
    marginBottom: 30,
  },

  botoes: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },

  botao: {
    width: 80,
    height: 80,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },

  botaoZerar: {
    width: 180,
    height: 60,
    backgroundColor: "#cc482eff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  }

});
