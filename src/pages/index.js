import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/homedefault/banner"
import About from "../components/homedefault/about"
import Service from "../components/homedefault/service"
import Project from "../components/homedefault/project"
import Testimonial from "../components/homedefault/testimonial"
import Timeline from "../components/homedefault/timeline"
import BlogPost from "../components/blogPost"
import Contact from "../elements/contact/contact"
// import ScrollUp from "../components/scroll-up/scroll-up"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Ayesh Nipun" />
      <Banner />
      {/* <ScrollUp /> */}
      <About />
      <Service />
      <div id="portfolio">
        <Project />
        <Testimonial />
        <Timeline />
      </div>
      <BlogPost />
      <Contact />
    </Layout>
  )
}
export default IndexPage
