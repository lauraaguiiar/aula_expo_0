import{View, Text } from 'react-native';
import styles from './styles';

export default function Mensagem ({pais= ''}) {
    return (

        <View style={styles.vimensagem}>
        <Text style={styles.mensagem}>{` ${pais}`}</Text>
        </View>

    

    ); 
}

