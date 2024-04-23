import { View, Text} from 'react-native'
import styles from './styles';
import Mensagem from './mensagem';

export default function Atividade_2 (){
    return(
        <View styles={styles.container}>
            <Text style={styles.titulo}>
               Lista de Países
            </Text>

          <Mensagem pais='África do Sul'/>
          <Mensagem pais='Angola'/>
          <Mensagem pais='Cabo Verde'/>
          <Mensagem pais='Brasil'/>
          <Mensagem pais='Bolívia'/>
          <Mensagem pais='Paraguai'/>
          <Mensagem pais='Peru'/>
          <Mensagem pais='Venezuela'/>
          <Mensagem pais='Coreia do Sul'/>

        </View>
       
    );
}