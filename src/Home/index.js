import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
          <Image 
            resizeMode="center"
            style={styles.imageLogo}
            source={require('./assets/image/LogoPokemon.png')}
          />
         
      </View>

      <View>
        <Text style={styles.textComece}>
          Comece a coletar pokémons!
        </Text>
      </View>

      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput 
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Entrar</Text>
        </TouchableOpacity>

        <Image 
            style={styles.imageBottomLogin}
            resizeMode="center"
            source={require('./assets/image/ImageBottomLogin.png')}
        />

      </View>

          

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  containerLogo:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  imageLogo:{
    flex:1,
    overflow: 'hidden',
    alignItems: 'center',
    position: 'relative',
    margin: 120,
  },
  textComece:{
    fontSize:35,
    fontWeight: "bold",
    marginBottom: 35,
  },  
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    width:'90%',
    marginBottom:30,
  },
  input:{
    borderColor: '#7D7E80',
    borderWidth: 1,
    width: '90%',
    marginBottom: 15,
    color: '#7D7E80',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    paddingLeft: 20,    
  },
  btnSubmit:{
    backgroundColor:'#FFCB05',
    width: '90%',
    height: 50,
    marginTop: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',

  },
  btnSubmitText:{
    fontSize:16,
    color:'#1E1E1F',
    fontWeight: '500',
  },
  imageBottomLogin:{
    flex:1,
    marginBottom: -250,
  }

  
})
