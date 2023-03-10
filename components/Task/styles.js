import { StyleSheet } from "react-native";
import colors from "../../contains/colors";

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    square: {
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // so chan
    even: {
        backgroundColor: colors.primary,
    },
    // so le
    odd: {
        backgroundColor: colors.second,
    },
    number: {
        color: colors.white,
        fontSize: 15,
        fontWeight: '500'
    },
    content: {
        width: '80%',
        fontSize: 15
    }
})

export default styles