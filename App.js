import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

import Task from './components/Task';
import styles from './App.components.styles';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
    const [taskList, setTaskList] = useState([]);
    const handleAddTask = (task) => {
        // Add Task
        setTaskList([...taskList, task]);
    }
    const handleDeleteTask = (index) => {
        Alert.alert('Thông Báo!', 'Bạn có chắc chắn muốn xóa?', [
            {
                text: 'OK',
                onPress: () => {
                    // copy lai taskList
                    let taskListTmp = [...taskList];
                    // tra ve 1 mang khong chua phan tu da xoa
                    taskListTmp.splice(index, 1);
                    setTaskList(taskListTmp);
                }
            },
            { text: 'Cancel', onPress: () => { } },
        ]);
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Text style={styles.header}>Todo List</Text>
                </View>
                <ScrollView style={styles.items}>
                    {
                        taskList.map((value, index) => {
                            return <Task key={index} title={value} number={index + 1} onDeleteTask={() => handleDeleteTask(index)}></Task>
                        })
                    }

                </ScrollView>
            </View>
            <Form onAddTask={handleAddTask}></Form>
        </View>
    );
}


