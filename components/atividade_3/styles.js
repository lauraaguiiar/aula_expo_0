import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9cb7',
        borderRadius: 20,
        width:'100%',
        alignItems: 'center',
    },
     
    container2:{
        display:'flex',
        flexDirection:'row',
        width:'25%',

    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#e80744',

    },

    botao:{
        borderWidth:3,
        padding: 10,
        width:'40%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#cc3fac',
        margin:10,
       
        
    },
    
    txtBotao:{
        fontSize: 20,
        color:'#cc3fac'
    },

     botaoPress:{
        backgroundColor: '#734af0'

    },

    txtpress:{
        fontSize:25,
        color:'#cc3fac',

    },

    txtNumero:{
       fontSize: 25,
       color: '#cc3fac',
       marginVertical:10,
    },

})

export default styles;