import React from 'react'
import Header from '../../components/layouts/users/Header'
import Bander from '../../components/layouts/users/Bander'
import ListProducts from '../../components/layouts/users/ListProducts'
import Footer from '../../components/layouts/users/Footer'

function Hompage() {
  return (
    <div>
      <Header/>
      <Bander/>
      <ListProducts/>
      <Footer/>
    </div>
  )
}

export default Hompage
