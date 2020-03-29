import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	logo_container: {
		margeTop: 20,
		justifyContent: 'flex-end',
		alignContent: 'center',

	}
})

const DisplayAnImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo_container}
                source={require('Bureau/LogoApp.png')}
            />
        </View>
        )
}

export default DisplayAnImage