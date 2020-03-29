import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator, Image } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HollowComponent from '../components/hollowComponent'
import DisplayAnImage from '../components/Image/DisplayAnImageWithStyle'

const Home = ({ navigation }) => {
    return (
        
        
        <View View style={styles.main_container}>
            <DisplayAnImage/>
      <HollowComponent/>
      <Link onPress={() => navigation.navigate('Login')}>Login</Link>
          </View>
  )
}

const Link = styled.Text``

Home.propTypes = {
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    }
    
}
)

export default Home

