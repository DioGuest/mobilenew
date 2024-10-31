// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const App = () => {
//   const [peso, setPeso] = useState('');
//   const [altura, setAltura] = useState('');
//   const [resultado, setResultado] = useState(null);
//   const [mensagem, setMensagem] = useState('')

//   const calcularIMC = () => {
//     const pesoNormal = 24.9  

//     const imc = peso / (altura * altura);
//     setResultado(imc.toFixed(2));

//     if (resultado < pesoNormal) {
//       setMensagem('normal')
//     }
//     if (resultado > pesoNormal) {
//       setMensagem('Obesidade')
//     } 
//   };


//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Calculadora de IMC</Text>
//       <TextInput
//         placeholder="Peso (kg)"
//         keyboardType="numeric"
//         value={peso}
//         onChangeText={setPeso}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Altura (m)"
//         keyboardType="numeric"
//         value={altura}
//         onChangeText={setAltura}
//         style={styles.input}
//       />
//       <Button title="Calcular" onPress={calcularIMC} />
//       {resultado && <Text style={styles.result}>IMC: {resultado} / O seu IMC está: {mensagem} </Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   title: { fontSize: 24, marginBottom: 20 },
//   input: { borderWidth: 1, padding: 10, marginVertical: 10 },
//   result: { marginTop: 20, fontSize: 18 },
// });

// export default App;





import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

// Importando as imagens
const imagemNormal = require('./assets/normal.jpg'); // Ajuste o nome do arquivo se necessário
const imagemObesidade = require('./assets/obesidade.jpg'); // Ajuste o nome do arquivo se necessário

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const pesoNormal = 24.9;
    const imc = peso / (altura * altura);
    setResultado(imc.toFixed(2));

    if (imc < pesoNormal) {
      setMensagem('normal');
    } else {
      setMensagem('obesidade');
    }
  };

  const renderImage = () => {
    if (mensagem === 'normal') {
      return <Image source={imagemNormal} style={styles.image} />;
    } else if (mensagem === 'obesidade') {
      return <Image source={imagemObesidade} style={styles.image} />;
    }
    return null; // Retorna null se não houver mensagem
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
        style={styles.input}
      />
      <TextInput
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
        style={styles.input}
      />
      <Button title="Calcular" onPress={calcularIMC} />
      {resultado && (
        <View>
          <Text style={styles.result}>
            IMC: {resultado} / O seu IMC está: {mensagem}
          </Text>
          {renderImage()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  result: { marginTop: 20, fontSize: 18 },
  image: { width: 200, height: 200, marginTop: 20, alignSelf: 'center' }, // Estilos para a imagem
});

export default App;
