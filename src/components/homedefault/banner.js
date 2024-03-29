import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import TextLoop from "react-text-loop"
const Banner = () => {
  const banenrQueryData = useStaticQuery(graphql`
    query BannerDefaultQuery {
      homedefaultJson(id: { eq: "main-banner" }) {
        title
        subtitle
        bgImage {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920, maxHeight: 850) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
              presentationWidth
            }
          }
        }
      }
      file(relativePath: { eq: "images/banner/person-image-3.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const navigateToAbout = () => {
    // var element = window.getElementById("about");
    var element = document.querySelector('#about')
    //you can do it by jquery. no matter
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const BannerImages =
    banenrQueryData.homedefaultJson.bgImage.childImageSharp.fluid
  const PortfolioImages = banenrQueryData.file.childImageSharp.fixed
  const Title = banenrQueryData.homedefaultJson.title
  return (
    <div className="rn-slider-area" id="home">
      {/* Start Single Slider  */}
      <BackgroundImage
        className="rn-slide slider-style-01 banner-fixed-height"
        fluid={BannerImages}
      >
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="content text-center">
                    <div className="thumbnail">
                      <Img
                        className="portfolio-images"
                        fixed={PortfolioImages}
                      />
                    </div>
                    <h1
                      className="title"
                      dangerouslySetInnerHTML={{ __html: Title }}
                    ></h1>
                    <h4 className="subtitle">
                      I'm a
                      <TextLoop mask={true}>
                        <span>Senior Software Engineer</span>
                        <span>Microsoft Certified Azure Developer</span>
                        <span>Gamer</span>
                        <span>Freelancer</span>
                        <span>Die-hard MARVEL fan</span>
                      </TextLoop>{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row scroll-div">
            <div onClick={navigateToAbout} id="scroll-down"></div>
          </div> */}
        </div>

        <div className="black-bg-overlay"></div>
        <a className="angle-down-btn" herf="#">
          <i className="xcon-angle-double-down"></i>
        </a>
      </BackgroundImage>
      {/* End Single Slider  */}
    </div>
  )
}
export default Banner
