import { View, Text } from "react-native";
import styles from "../Header/Header.style";


export default function Header () {
    return( 
            <View style={styles.header}>
                <Text style={styles.headerTitle}>APP LISTA TAREFAS</Text>
            </View>)
    }
