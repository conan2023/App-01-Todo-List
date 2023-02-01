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
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
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
    flex: 1
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  top: {
    marginTop: 40,
    // marginLeft: 40,
    // marginRight: 40,
    marginHorizontal: 40,
    backgroundColor: 'pink',
    // paddingTop: 20,
    // paddingBottom: 20,
    // co the thay the bang paddingVertical
    paddingVertical: 10,
    // paddingLeft: 20,
    // paddingRight: 20,
    // co the thay the bang paddingHorizontal
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  topText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold'
  },
  bottom: {
    marginHorizontal: 40,
    marginBottom: 40,
    backgroundColor: '#5fb9d2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  bottomText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: '#2dff57',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold'
  }
});
