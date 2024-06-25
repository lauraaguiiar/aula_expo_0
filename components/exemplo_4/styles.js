import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ff9cb7',
        borderRadius: 20,
        width:'100%',
        alignItems: 'center',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#e80744',

    },

    input:{
        fontSize: 25,
        color: '#e80744',
        width: '80%',
        marginVertical: 10,
        borderWidth: 2,
        borderColor:'#cc3fac',
        padding: 5,
        borderRadius: 20,


    },

    texto:{
        fontSize: 25,
        color: '#e80744',
        width: '80%',
        marginVertical:5,
    },

})

export default styles;