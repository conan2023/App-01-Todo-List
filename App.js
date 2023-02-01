import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.top}>
                    <Text style={styles.topText}>Top Left</Text>
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.containerBottomLeft}>
                    <View style={styles.bottomLeft}>
                        <Text style={styles.bottomText}>Bottom Left</Text>
                    </View>
                </View>
                <View style={styles.containerBottomRight}>
                    <View style={styles.containerBottomRightTop}>
                        <Text style={styles.bottomText}>Right Top</Text>
                    </View>
                    <View style={styles.containerBottomRightBottom}>
                        <Text style={styles.bottomText}>Right Bottom</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e3fdff',
        flex: 1
    },
    containerTop: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBottom: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection: 'row'
    },
    containerBottomLeft: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBottomRight: {
        flex: 1,
        backgroundColor: 'blue',
    },
    containerBottomRightTop: {
        flex: 3,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBottomRightBottom: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    top: {

    },
    topText: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold'
    },
    bottom: {

    },
    bottomText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    center: {

    },
    centerText: {

    }
});
