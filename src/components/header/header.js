import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Scrollspy from "react-scrollspy"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaStackOverflow,
} from "react-icons/fa"

// Start Header Area
const Header = () => {
  const headerQuery = useStaticQuery(graphql`
    query headerQuery {
      allMenuJson {
        nodes {
          title
          path
        }
      }
      file(relativePath: { eq: "images/logo/desktop-light-logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const arloLogo = headerQuery.file.childImageSharp.fixed

  return (
    <Fragment>
      <header className="rn-header header-with-sidebar d-none d-xl-block">
        <div className="header-inner">
          {/* Header Logo  */}
          <div className="logo">
            <Link to="/">
              <Img fixed={arloLogo} />
            </Link>
          </div>

          <div className="mainmenu-inner">
            <div className="mainmenu">
              <Scrollspy
                className="mainmenu"
                items={[
                  "home",
                  "about",
                  "service",
                  "portfolio",
                  "news",
                  "contact",
                ]}
                currentClassName="is-current"
                offset={-200}
              >
                <li>
                  <a
                    className="nav-link menu-hover-link"
                    href="/"
                    onClick={e => {
                      let home = document.getElementById("home")
                      e.preventDefault() // Stop Page Reloading
                      home && home.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="hover-item">
                      <span data-text="Home">Home</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link menu-hover-link"
                    href="/"
                    onClick={e => {
                      let about = document.getElementById("about")
                      e.preventDefault() // Stop Page Reloading
                      about && about.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="hover-item">
                      <span data-text="About">About</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link menu-hover-link"
                    href="/"
                    onClick={e => {
                      let service = document.getElementById("service")
                      e.preventDefault() // Stop Page Reloading
                      service && service.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="hover-item">
                      <span data-text="Services">Services</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link menu-hover-link"
                    href="/"
                    onClick={e => {
                      let portfolio = document.getElementById("portfolio")
                      e.preventDefault() // Stop Page Reloading
                      portfolio &&
                        portfolio.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="hover-item">
                      <span data-text="Portfolio">Portfolio</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link menu-hover-link"
                    href="/#news"
                    onClick={e => {
                      let news = document.getElementById("news")
                      e.preventDefault() // Stop Page Reloading
                      news && news.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="hover-item">
                      <span data-text="News">News</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link menu-hover-link"
                    href="/"
                    onClick={e => {
                      let contact = document.getElementById("contact")
                      e.preventDefault() // Stop Page Reloading
                      contact && contact.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="hover-item">
                      <span data-text="Contact">Contact</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>

          {/* Start Header Bottom  */}
          <div className="header-bottom">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/Ayesh.Nipun/" target="blank">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bladeB0ss" target="blank">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ayeshnipun/"
                  target="blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bl_ad_e/" target="blank">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/11142587/ayesh-nipun"
                  target="blank"
                >
                  <FaStackOverflow />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Fragment>
  )
}
// End Header Area

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
