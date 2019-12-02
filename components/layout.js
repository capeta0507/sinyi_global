import React from 'react'
import Icon from './icon'
import Footer from './footer/footer'
import MobileFooter from './footer/mobileFooter'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css'

const Layout = (props) => {
  return(
		<>
      {props.children}
      <Footer />
      <MobileFooter />
    </>
  )
}

export default Layout
