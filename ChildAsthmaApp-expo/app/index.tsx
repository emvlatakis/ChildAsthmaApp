import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../FirebaseConfig';

const index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        setLoading(true);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in:', user);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async () => {
        setLoading(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up:', user);
        } catch (error: any) {
            console.log(error);
            alert('Sign up failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.textInput}
                placeholder="email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.textInput}
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {loading ? (
                <ActivityIndicator size={'small'} style={{ margin: 28 }} />
            ) : (
                <>
                    <TouchableOpacity style={styles.button} onPress={signIn}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={signUp}>
                        <Text style={styles.text}>Make Account</Text>
                    </TouchableOpacity>
                </>
            )}
        </SafeAreaView>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE5E5', // light red for a gentle healthcare vibe
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        marginBottom: 40,
        color: '#B71C1C', // deep red for emphasis
    },
    textInput: {
        height: 50,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderColor: '#FFCDD2', // soft red border
        borderWidth: 2,
        borderRadius: 15,
        marginVertical: 15,
        paddingHorizontal: 25,
        fontSize: 16,
        color: '#3C4858',
        shadowColor: '#EF9A9A', // gentle red shadow
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    button: {
        width: '90%',
        marginVertical: 15,
        backgroundColor: '#E53935', // vibrant red button
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#E53935', // matching red shadow
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
});