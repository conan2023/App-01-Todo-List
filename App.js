import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View>
                    <Text style={styles.header}>Todo List</Text>
                </View>
                <ScrollView style={styles.items}>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={styles.square}>
                                <Text style={styles.number}>01</Text>
                            </View>
                            <Text style={styles.content}>Lau nha</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={styles.square}>
                                <Text style={styles.number}>01</Text>
                            </View>
                            <Text style={styles.content}>Lau nha</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.input}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef6f8'
    },
    body: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 30,
        color: '#58acca',
        fontWeight: 'bold'
    },
    items: {
        marginTop: 15
    },
    item: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    square: {
        backgroundColor: '#66cde4',
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        color: '#eef6f8',
        fontSize: 15,
        fontWeight: '500'
    },
    content: {
        width: '80%',
        fontSize: 15
    }
});
