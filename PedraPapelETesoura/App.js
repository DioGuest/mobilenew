import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native';

const options = {
  pedra: require('./assets/pedra.png'),
  papel: require('./assets/papel.png'),
  tesoura: require('./assets/tesoura.png'),
};

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [appChoice, setAppChoice] = useState(null);
  const [result, setResult] = useState('');

  const playGame = (userSelection) => {
    const choices = ['pedra', 'papel', 'tesoura'];
    const appSelection = choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(userSelection);
    setAppChoice(appSelection);
    determineWinner(userSelection, appSelection);
  };

  const determineWinner = (user, app) => {
    if (user === app) {
      setResult("Empate!");
    } else if (
      (user === 'pedra' && app === 'tesoura') ||
      (user === 'tesoura' && app === 'papel') ||
      (user === 'papel' && app === 'pedra')
    ) {
      setResult("Você ganhou!");
    } else {
      setResult("Você perdeu!");
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setAppChoice(null);
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>

      <View style={styles.buttonsContainer}>
        {Object.keys(options).map((key) => (
          <TouchableOpacity key={key} onPress={() => playGame(key)}>
            <Image source={options[key]} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>

      {userChoice && appChoice && (
        <Text style={styles.result}>
          Você escolheu: {userChoice} {'\n'}
          O aplicativo escolheu: {appChoice} {'\n'}
          {result}
        </Text>
      )}

      <Button title="Jogar Novamente" onPress={resetGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default App;