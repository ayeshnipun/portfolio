import React, { useState, useEffect } from "react"
import CircleLoader from "react-spinners/CircleLoader";
import PropTypes from "prop-types"
import Header from "../components/header/header"
import HeaderNoSidebar from "../components/header/headerNoSidebar"
import Footer from "../components/footer/footer"
import "../scss/style.scss"

const Layout = ({ children }) => {
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDataLoaded(true)
    }, 2000)
  }, [])

  if (!dataLoaded) {
    return (
      <div className="active-dark-version main-wrapper text-center">
        <CircleLoader />
      </div>
    )
  }

  if (dataLoaded) {
    return (
      <div className="active-dark-version main-wrapper">
        <Header />
        <HeaderNoSidebar />
        <div className="home-content-wrapper">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
