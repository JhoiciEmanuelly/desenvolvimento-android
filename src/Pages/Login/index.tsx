import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';
type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>;
const Login = () => {
	const navigation = useNavigation<LoginProps>();
	function irTelaHome() {
		navigation.navigate('Home');
	}
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.img} source={require("../../assets/facebook.png")}></Image>
				<Text style={styles.textoImg}>Facebook</Text>
			</View>
			<View style={styles.formulario}>
				<TextInput placeholder="Endereço de E-mail" placeholderTextColor="#A19FA1" style={styles.Input}></TextInput>
				<TextInput placeholder="Senha" placeholderTextColor="#A19FA1" style={styles.Input}></TextInput>
				<View style={styles.botao}>
					<TouchableOpacity style={styles.botao} onPress={irTelaHome}>
						<Text style={styles.textButton}>Entrar</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.criar}>Crie uma conta no Facebook</Text>
			</View>
		</View>
	);
}

export default Login;