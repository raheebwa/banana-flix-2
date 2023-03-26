import React from 'react'
import { useAuth } from '../store/context/AuthContext'

const HomePage = () => {
    const {
        isAuthenticated
    } = useAuth()


    console.log(isAuthenticated)
  return (
    <div>HomePage</div>
  )
}

export default HomePage
