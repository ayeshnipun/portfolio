import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FiMapPin,
  FiPhoneIncoming,
  FiGift,
  FiBookOpen,
  FiMail,
  FiCalendar,
  FiBook,
} from "react-icons/fi"

const infoList = [
  {
    id: "1",
    icon: <FiGift />,
    label: "Birthday:",
    link: "09.11.1995",
  },
  {
    id: "2",
    icon: <FiMapPin />,
    label: "Location:",
    link: "Colombo, Sri Lanka",
  },
  {
    id: "3",
    icon: <FiBookOpen />,
    label: "Study:",
    link: "University of Colombo School of Computing",
  },
  {
    id: "4",
    icon: <FiMail />,
    label: "Mail:",
    link: "nipun.yesh@gmail.com",
  },
  {
    id: "4",
    icon: <FiCalendar />,
    label: "Age:",
    link: "27",
  },
  {
    id: "4",
    icon: <FiBook />,
    label: "Degree:",
    link: "B.Sc in Computer Science",
  },
  {
    id: "4",
    icon: <FiPhoneIncoming />,
    label: "Phone:",
    link: "+94 77 326 97 13",
  },
]

const About = () => {
  const aboutQueryData = useStaticQuery(graphql`
    query AboutDefaultQuery {
      homedefaultJson(id: { eq: "about" }) {
        title
        description
        downloadButton
        linkBUtton
        aboutData {
          iconName
          id
          label
          value
        }
      }
      file(relativePath: { eq: "images/banner/profile_image_x.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 395, height: 470) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const PortfolioImages = aboutQueryData.file.childImageSharp.fixed
  const title = aboutQueryData.homedefaultJson.title
  const description = aboutQueryData.homedefaultJson.description
  const downloadButton = aboutQueryData.homedefaultJson.downloadButton
  const linkBUtton = aboutQueryData.homedefaultJson.linkBUtton

  return (
    <div
      className="rb-about-area about-style-01 rn-section-gap bg-color-white"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span className="subtitle">BIOGRAPHY</span>
              <h2 className="title">ABOUT ME</h2>
            </div>
          </div>
        </div>
        <div className="row mt--60 mb--30 row--25">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="thumbnail">
              <div className="image">
                <Img className="portfolio-images" fixed={PortfolioImages} />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12 mt_md--40 mt_sm--40">
            <div className="inner">
              <div className="content">
                <div className="section-title">
                  {title && (
                    <h3
                      className="title"
                      dangerouslySetInnerHTML={{ __html: title }}
                    ></h3>
                  )}
                  {description && (
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                  )}
                </div>
                {infoList && (
                  <ul className="myabout-list">
                    {infoList.map((value, index) => (
                      <div className="list" key={index}>
                        <div className="icon">{value.icon}</div>
                        <span className="label">{value.label}</span>
                        <a className="link" href="#labelvalue">
                          {value.link}
                        </a>
                      </div>
                    ))}
                  </ul>
                )}
                <div className="button-group mt--20">
                  {downloadButton && (
                    <a className="rn-button" href="https://drive.google.com/file/d/1VbgkuE4XToI7g1-PhC2fMugpnF51Yuie/view?usp=sharing" target='blank'>
                      <span>{downloadButton}</span>
                    </a>
                  )}
                  {linkBUtton && (
                    <a className="rn-button" href="/" 
                    onClick={e => {
                      let contact = document.getElementById("contact")
                      // Stop Page Reloading
                      e.preventDefault() 
                      contact && contact.scrollIntoView({ behavior: "smooth" })
                    }}>
                      <span>{linkBUtton}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
