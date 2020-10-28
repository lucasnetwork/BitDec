import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Routes from './src/routes';

export default function App() {
	return (
		<View style={styles.container}>
			<Routes />
			<StatusBar style="light" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#8693ab',
		width: '100%',
		height: '100%',
	},
});
