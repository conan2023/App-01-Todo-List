import { StyleSheet } from "react-native";
import colors from "./contains/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    body: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 30,
        color: colors.primary,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 15
    },

});

export default styles;