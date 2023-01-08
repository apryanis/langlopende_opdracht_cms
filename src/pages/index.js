import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Beer from "../components/beer"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  beers,
} from "..pages/page.module.css"
const IndexPage = ({
  data: {
    wpPage: { homeFields },
  },
}) => {
  const image = getImage(homeFields.picture.localFile)

  return (
    <Layout>
      <section className={header}>
        <article className={headerInfo}>
          <h1 className={headerTitle}>{homeFields.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homeFields.description,
            }}
          />
        </article>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homeFields.picture.altText}
          />
        </div>
      </section>
{/*       <section className={section}>
          <h2 className={subtitle}>Featured Artists</h2>
          <p>
            // description
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed doo eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div className={beers}>
            {homeFields.beers.map(beer => {
                return <Beer slug={`beers/${beer.slug}`} key={beer.id} beer={beer} />
              })}
          </div>
       </section> */}
</Layout>
  )
}
export const query = graphql`
  query {
    wpPage(slug: {eq: "home"}) {
      homeFields {
        featuredBeers {
          ... on WpBeer {
                beerMeta {
                  alcoholgehalte
                  soort
                }
                id
                slug
         }
        }
        title
        description
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
export default IndexPage