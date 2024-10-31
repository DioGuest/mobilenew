import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faCog, faBell, faUser, faPhone, faComments, faCamera, faMapMarkerAlt, faFileAlt, faEdit, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faStar, faEnvelope, faMusic, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Novos ícones

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.topoBotao}>
        {[faHome, faHeart, faSearch, faShoppingCart, faCog].map((icon, index) => ( // Novos ícones
          <TouchableOpacity key={index} style={styles.botoesTopo}>
            <FontAwesomeIcon icon={icon} size={24} color="#fff" />
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.imagemBussola}>
        <TouchableOpacity style={styles.topoEsquerdaBotao}>
          <FontAwesomeIcon icon={faPlus} size={20} color="#fff" />
        </TouchableOpacity>
        
        <Image
          style={styles.image}
          source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/17/38/compass-152124_960_720.png' }}
        />

        <TouchableOpacity style={styles.baixoDireitaBotao}>
          <FontAwesomeIcon icon={faMinus} size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.tituloDesign}>
        <Text style={styles.tituloApp}>Design</Text>
        <TouchableOpacity style={styles.editarBotao}>
          <FontAwesomeIcon icon={faEdit} size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {['Card 1', 'Card 2', 'Card 3'].map((title, index) => (
          <View key={index} style={[styles.card, index === 2 && { backgroundColor: '#4A90E2', color: '#fff' }]}>
            <FontAwesomeIcon icon={faFileAlt} size={30} color={index === 2 ? '#fff' : '#000'} />
          </View>
        ))}
      </View>
      
      <View style={styles.botoesBaixo}>
        {[faPhone, faComments, faCamera, faMapMarkerAlt, faEnvelope].map((icon, index) => ( // Novos ícones
          <TouchableOpacity key={index} style={[styles.botaoCirculo, (index === 0 || index === 3) && { backgroundColor: '#4A90E2', color: '#fff' }]}>
            <FontAwesomeIcon icon={icon} size={24} color={(index === 0 || index === 3) ? '#fff' : '#4A90E2'} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'space-between',
    padding: 10,
  },
  tituloDesign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tituloApp: {
    fontSize: 24,
    textAlign: 'left',
    color: '#333',
  },
  editarBotao: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  topoBotao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  botoesTopo: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  botaoCirculo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  imagemBussola: {
    alignItems: 'center',
    borderWidth: 2,
    padding: 60,
    borderRadius: 30,
    position: 'relative',
    borderColor: '#4A90E2',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  topoEsquerdaBotao: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  baixoDireitaBotao: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    padding: 20,
    height: 250,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    alignItems: 'center',
  },
  botoesBaixo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
