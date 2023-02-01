import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const Form = () => {
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        if (task.length == 0) {
            alert('Vui lòng nhập task!');
            return false;
        }
        alert(task);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.addTask}>
            <TextInput
                placeholder='New task'
                style={styles.input}
                onChangeText={text => setTask(text)}
            ></TextInput>
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form