import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Timeline = () => {
  const TimelineData = useStaticQuery(graphql`
    query TimelineQuery {
      file(relativePath: { eq: "images/banner/ascentic.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 111, height: 21) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const envatoImages = TimelineData.file.childImageSharp.fixed
  return (
    <div className="timeline-area rn-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span className="subtitle">TIMELINE</span>
              <h2 className="title">WORKING PERIOD</h2>
            </div>
          </div>
        </div>
        <div className="row mt--10 row--25">
          {/* Start Single Timeline  */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="single-timeline">
              <div className="inner">
                <div className="time">
                  <span>February, 2020 - Present</span>
                </div>
                <Img className="envato-images" fixed={envatoImages} />
                <span className="job">Full Stack Software Enginner</span>
                <p>
                  With 2 years experience as a Software Enginner, I have
                  acquired the skills and knowledge necessary to make your
                  project a success.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Timeline  */}

          {/* Start Single Timeline  */}
          <div className="col-lg-6 col-md-12 col-12">
            <div className="single-timeline">
              <div className="inner">
                <div className="time">
                  <span>August, 2019 - February, 2020</span>
                </div>
                <Img className="envato-images" fixed={envatoImages} />
                <span className="job">Software Enginner - Trainee</span>
                <p>
                  In this 6 months, I have gain knowledge on C#, ASP.NET Core,
                  React JS, Microsoft Azure and Unit testing. And some experience 
                  in project management with JIRA
                </p>
              </div>
            </div>
          </div>
          {/* End Single Timeline  */}
        </div>
      </div>
    </div>
  )
}

export default Timeline
