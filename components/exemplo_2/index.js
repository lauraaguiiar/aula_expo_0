import { View, Text } from 'react-native';

import styles from './styles';

function Exemplo2 (){
    return( 
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>


           <view style={styles.vimensagem}>
            <Text style={styles.mensagem}>Olá Laura</Text>
            </view>

        </View>
    )
}

export default Exemplo2;