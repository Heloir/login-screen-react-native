import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#DC4041',
    color: 'white',
    padding: 15,
    marginHorizontal: 90,
    borderRadius: 50,
    marginTop: 30
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  textDesign: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  linkContainer: {
    color: '#DC4041',
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop: 10,
  },
  header: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DC4041',
    borderBottomStartRadius: 100,
    borderBottomEndRadius: 100
  },
  perfilImage:{
    width: 90,
    height: 90,
    borderColor: 'white',
    borderWidth: 2.5,
    borderRadius: 50,
    marginTop: 50
  },
  container: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  inputStyles: {
    backgroundColor: '#F2EEEE',
    marginTop: 20,
    borderRadius: 30,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  register: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  }
})

function App(){
  return (
    <>
    <View style={styles.header}>
      <Image
      style={styles.perfilImage}
      source={require('./perfil-image.jpg')}
       />
    </View>

    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.textDesign}>Sign In to continue</Text>
    </View>

    <View style={styles.container}>

      <TextInput 
      placeholder='Email'
      style={styles.inputStyles}
      />

      <TextInput 
      placeholder='Password'
      style={styles.inputStyles}
      />

      <Text style={styles.linkContainer}>Forget Password?</Text>

    </View>
    
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Sign In</Text>
    </Pressable>


      <Text style={styles.register}>New User? <Text style={styles.linkContainer}>Sign Up</Text></Text>

    </>
  )
}

export default App;
