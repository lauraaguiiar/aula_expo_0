import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
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

    botao:{
        borderWidth:3,
        padding: 10,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#cc3fac',
    },
    
    txtBotao:{
        fontSize: 20,
        color:'#cc3fac'
    },

     botaoPress:{
        backgroundColor: '#734af0'

    },

    txtNumero:{
       fontSize: 35,
       color: '#cc3fac',
       marginVertical:10,
    },

})

export default styles;