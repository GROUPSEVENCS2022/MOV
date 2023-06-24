import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 35,
        height: '100%',
    },
    textInput: {
        height: 50,
        backgroundColor: '#f1f1f1',
        marginVertical: 5,
        borderRadius: 5,
        padding: 5,
        marginLeft: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: { 
        backgroundColor: '#c9c9c9',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {
        color: '#505050',
    },
    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },
    listView: {
        position: 'absolute',
        top: 105,
    },

    autocompleteContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
        right: 10,
    },
    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 20,
        left: 15,
        borderRadius: 5,
    },
    line: {
        width: 1,
        height: 50,
        backgroundColor: 'grey',
        position: 'absolute',
        top: 28,
        left: 17,

    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 15,
    },

});

export default styles;