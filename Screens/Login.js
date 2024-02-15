import React, {Component} from "react";
import {View,
        StyleSheet,
        TouchableOpacity,
        TextInput,
        Text,
        Alert,
        Image,
        KeyboardAvoidingView
    } from 'react-native'

        const Log = require("../assets/Login Logo.png")

    export default class Login extends Component{
        constructor(props) {
            super(props);
            this.state = {
              email: "",
              password: ""
            };
          }


        render(){ return (
                
            <KeyboardAvoidingView behavior="padding">
                    <View style = {styles.Container}>
                    <Image source={Log}></Image>
                </View>

                <View style={styles.lowerContainer}>
                    <TextInput
              style={styles.textinput}
              onChangeText={text => this.setState({ email: text })}
              placeholder={"Digite o endereço de E-Mail"}
              placeholderTextColor={"#FFFFFF"}
              autoFocus
            />
            <TextInput
              style={[styles.textinput, { marginTop: 20 }]}
              onChangeText={text => this.setState({ password: text })}
              placeholder={"Insira uma Senha"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => this.handleLogin(email, password)}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
           </View>      
        </KeyboardAvoidingView>
        )
            
        }
        

    }

    const styles = StyleSheet.create({
        Container:{
                marginTop:20,
                margin: 160/2
        },

        textinput: {
            width: "75%",
            height: 55,
            padding: 10,
            borderColor: "#FFFFFF",
            borderWidth: 4,
            borderRadius: 10,
            fontSize: 18,
            color: "#FFFFFF",
            fontFamily: "Rajdhani_600SemiBold",
            backgroundColor: "gray"
          },
        
        lowerContainer: {
          flex: 0.5,
          alignItems: "center"
        },
        button: {
            width: "43%",
            height: 55,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00008B",
            borderRadius: 15
          },
          buttonText: {
            fontSize: 24,
            color: "#FFFFFF",
            fontFamily: "Rajdhani_600SemiBold"
          },
    })