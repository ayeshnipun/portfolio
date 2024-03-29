import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ServiceOne from "../../elements/service/serviceOne"
import { ProgressBar } from "react-bootstrap"

const Service = () => {
  const bgshapeImages = useStaticQuery(graphql`
    query BgshapeImagesQuery {
      file(relativePath: { eq: "bg/bg-image-1.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
            presentationHeight
            presentationWidth
          }
        }
      }
      homedefaultJson(id: { eq: "skill" }) {
        title
        description
      }
    }
  `)
  const Title = bgshapeImages.homedefaultJson.title
  const Description = bgshapeImages.homedefaultJson.description
  return (
    <div className="service-area bg-color-extra03 rn-section-gap" id="service">
      {/* Start Service Area  */}
      <div className="rn-service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb--30">
                <span className="subtitle">SERVICES</span>
                <h2 className="title">WHAT I DO</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ServiceOne
              column="col-lg-4 col-md-6 col-12"
              serviceStyle="service-style-1 mt--30"
            />
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Skill Area  */}
      <div className="rn-counterup-area counterup-style-1 rn-section-gapTop">
        <div className="container">
          <div className="row row--30">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="left-content">
                <h3
                  className="title"
                  dangerouslySetInnerHTML={{ __html: Title }}
                ></h3>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
              <div className="progressbar-area">
                <div className="progress-bar--1">
                  <div className="single-progress">
                    <h6 className="title">Front end development</h6>
                    <ProgressBar now={81} />
                    <span className="label">81%</span>
                  </div>

                  <div className="single-progress">
                    <h6 className="title">Back end development</h6>
                    <ProgressBar now={82} />
                    <span className="label">82%</span>
                  </div>

                  <div className="single-progress">
                    <h6 className="title">Microsoft Azure</h6>
                    <ProgressBar now={89} />
                    <span className="label">89%</span>
                  </div>
                  
                  <div className="single-progress">
                    <h6 className="title">Docker</h6>
                    <ProgressBar now={89} />
                    <span className="label">65%</span>
                  </div>
                  
                  <div className="single-progress">
                    <h6 className="title">Kubernetes</h6>
                    <ProgressBar now={89} />
                    <span className="label">60%</span>
                  </div>

                  <div className="single-progress">
                    <h6 className="title">Database Management</h6>
                    <ProgressBar now={80} />
                    <span className="label">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Skill Area  */}
    </div>
  )
}
export default Service
