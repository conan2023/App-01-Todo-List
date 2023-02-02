import { StyleSheet } from "react-native";
import colors from "../../contains/colors";

const styles = StyleSheet.create({
    addTask: {
        bottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        height: 40,
        width: '80%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: colors.text
    },
    iconWrapper: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.background
    },
    icon: {
        fontSize: 25,
        color: colors.white
    }
})

export default styles