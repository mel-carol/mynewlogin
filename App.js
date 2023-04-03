import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDMKhMlKE5ZtiaFm6oIa2tJ5Ka1joV7HMk",
  authDomain: "login-e0c82.firebaseapp.com",
  projectId: "login-e0c82",
  storageBucket: "login-e0c82.appspot.com",
  messagingSenderId: "568117572117",
  appId: "1:568117572117:web:12346f51beb0bebfe6541c"
};

const app = initializeApp(firebaseConfig);

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => alert(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 8,
    width: '80%',
  },
});

export default LoginScreen;