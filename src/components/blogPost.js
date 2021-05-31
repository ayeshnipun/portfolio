import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Blog from "./blog"

const BlogPost = () => {
  const blogMediumQueryData = useStaticQuery(graphql`
    query Medium {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            title
            uniqueSlug
            createdAt(formatString: "MMM YYYY")
            virtuals {
              previewImage {
                imageId
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `)

  const blogs = blogMediumQueryData.allMediumPost.edges

  console.log(blogs)
  return (
    <div className="rn-post-area rn-section-gap bg-color-extra03" id="news">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mb--30">
              <span className="subtitle">NEWS</span>
              <h2 className="title">LATEST NEWS</h2>
            </div>
          </div>
        </div>
        <div className="row row--25">
          {blogs.map(blog => (
            <div
              className="col-lg-4 col-md-6 col-12"
            >
              <Blog
                image={blog.node.virtuals.previewImage.imageId}
                title={blog.node.title}
                date={blog.node.createdAt}
                author={blog.node.author.name}
                path={blog.node.uniqueSlug}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
