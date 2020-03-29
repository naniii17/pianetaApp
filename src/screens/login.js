import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HollowComponent from '../components/hollowComponent'

const Login = ({ navigation }) => {
  return (
    <>
      <HollowComponent />
      <Link onPress={() => navigation.navigate('Home')}>Home</Link>
    </>
  )
}

const Link = styled.Text``

Login.propTypes = {
  navigation: PropTypes.object
}

export default Login
