import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    time: {
        color: '#5d5d5d',
    },
    rightContainer: {
        width: 120,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },    
});

export default styles;