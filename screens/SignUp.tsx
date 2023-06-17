import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { Auth } from '../store/thunk/AuthThunk';

const SignUpScreen = ({ navigation }: any) => {

    const { loading } = useSelector((state: RootState) => state.authSlice)
    const [email, setEmail] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>()
    const registerHandler = () => {
        dispatch(Auth(email)).then(res => {
            navigation.navigate('confirm')
        })
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://www.bootdey.com/image/580x580/20B2AA/20B2AA' }}
                style={styles.header}>
                <Text style={styles.heading}>My Awesome App</Text>
            </ImageBackground>
            <View style={styles.card}>
                <TextInput onChangeText={setEmail} style={styles.input} placeholder="Email" />
                <TouchableOpacity style={styles.button} onPress={registerHandler}>
                    {loading ? <ActivityIndicator /> : <Text style={styles.buttonText}>Register</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate("login")}>
                    <Text style={styles.createAccountButtonText}>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        width: '100%',
        height: 200,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    forgotPasswordButton: {
        width: '100%',
        textAlign: 'flex-end',
    },
    forgotPasswordButtonText: {
        color: '#20B2AA',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        padding: 20,
        marginTop: 40,
        width: '90%',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
    },
    button: {
        backgroundColor: '#20B2AA',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    createAccountButton: {
        marginTop: 20,
    },
    createAccountButtonText: {
        color: '#20B2AA',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default SignUpScreen;