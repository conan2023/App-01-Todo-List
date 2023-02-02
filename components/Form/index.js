import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'

import styles from './styles'

const Form = (props) => {
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        if (task.length == 0) {
            alert('Vui lòng nhập task!');
            return false;
        }
        props.onAddTask(task);
        // set input rong
        setTask('');
        // an ban phim
        Keyboard.dismiss();
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.addTask}>
            <TextInput
                placeholder='New task'
                style={styles.input}
                onChangeText={text => setTask(text)}
                // set input rong
                value={task}
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