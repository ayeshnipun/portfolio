import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiPhoneIncoming,
} from "react-icons/fi"
import Contactform from "./contactform"
const infoList = [
  {
    id: "1",
    icon: <FiMapPin />,
    label: "Location:",
    link: "Colombo, Sri Lanka",
  },
  {
    id: "2",
    icon: <FiMail />,
    label: "Email:",
    link: "nipun.yesh@gmail.com",
  },
  {
    id: "3",
    icon: <FiPhone />,
    label: "Phone:",
    link: "+94 77 326 97 13",
  },
  {
    id: "4",
    icon: <FiPhoneIncoming />,
    label: "Whatsapp:",
    link: "+94 77 326 97 13",
  },
]

const Contact = () => {
  const contactData = useStaticQuery(graphql`
    query contactDataQuery {
      homedefaultJson(id: { eq: "contactus" }) {
        title
        subtitle
      }
      site {
        siteMetadata {
          getform_url
        }
      }
    }
  `)
  const Title = contactData.homedefaultJson.title
  const Description = contactData.homedefaultJson.subtitle
  const {
    site: {
      siteMetadata: { getform_url },
    },
  } = contactData
  return (
    <div className="rn-contact-area rn-section-gap bg-color-white" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mb--30">
              <span className="subtitle">{Description}</span>
              <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: Title }}
              ></h2>
              <p className="description mt--75 mt_sm--30 mt_md--30">
                Please fill out the form on this section to contact with me. Or
                call <br /> anytime
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Start Contact Form  */}
          <div className="col-lg-6 col-12 mt--30">
            <Contactform url={getform_url} />
          </div>
          {/* End Contact Form  */}

          <div className="col-lg-6 col-12 mt--30">
            <div className="contact-info-list-wrapper">
              {infoList.map((value, index) => (
                <div className="list" key={index}>
                  <div className="icon">{value.icon}</div>
                  <span className="label">{value.label}</span>
                  <a className="link" href="#labelvalue">
                    {value.link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
