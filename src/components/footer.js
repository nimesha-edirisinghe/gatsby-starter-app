import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const footerData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>Created By {footerData.site.siteMetadata.author} © 2020</footer>
  )
}
export default Footer
