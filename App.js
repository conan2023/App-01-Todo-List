import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Task from './components/Task';
import styles from './App.components.styles';
import Form from './components/Form';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Text style={styles.header}>Todo List</Text>
                </View>
                <ScrollView style={styles.items}>
                    <Task></Task>
                    <Task></Task>
                    <Task></Task>
                </ScrollView>
            </View>
            <Form></Form>
        </View>
    );
}


