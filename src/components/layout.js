import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container, 
  nav, 
  navLinks, 
  navLinkItem, 
  navLinkText, 
  siteTitle,
  siteFooter 
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          author
        }
      }
      wpPage(slug: { eq: "contact-us" }) {
        contactUsFields {
            address
            city
            zipCode
            facebook
            instagram
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <ul className={navLinks}>
        <li>
        </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/beers">
              Beers
            </Link>
          </li>
        </ul>
      </nav>
      <main>
      <main>{children}</main>
      </main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        companyInfo={data.wpPage.contactUsFields}
      />
      {/* <footer className={siteFooter}>
      <p>&copy; 2023 {data.site.siteMetadata.author} | Langlopende Taak CMS Development voor AP Hogeschool</p>
      </footer> */}
    </div>
  )
}

export default Layout