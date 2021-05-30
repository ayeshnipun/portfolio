import React from "react"
import { Link } from "gatsby"
import { slugify } from "../utils/utilityFunctions"
import Image from "../elements/image"

const Blog = ({ title, date, author, path, image, excerpt, category }) => {
  var postUrl = `https://nipun-yesh.medium.com/${path}`;
  return (
    <div className="content-block">
      <div className="post-thubnail">
        {image && (
          <Link to={postUrl} target='blank'>
            <Image src={image} alt={title} />
          </Link>
        )}
      </div>

      <div className="post-content">
        <div className="blog-meta">
          {title && (
            <h3 className="title">
              <Link to={postUrl} target='blank'>{title}</Link>
            </h3>
          )}
          {date && <span className="date">{date}</span>}
          {author && (
            <span className="author">
              By
              <Link className="author-name" to={`/author/${slugify(author)}`}>
                {author}
              </Link>
            </span>
          )}
          {category && (
            <span className="category">
              <Link to={`/category/${slugify(category)}`}>{category}</Link>
            </span>
          )}
        </div>

        {excerpt && <p className="description">{excerpt}</p>}
        <div className="read-more">
          <Link to={path} target="blank">
            <span>Read More...</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Blog
