import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BeersPage = ({data: {allWpBeer: {edges}}}) => {
  return (
    <Layout pageTitle="Top 5 - Belgische trappistenbieren ">
      {edges.map((item) => {
        const beer = item.node.beerMeta;
        const slug = item.node.slug;
        return <Link to={`/beers/${slug}`}>
          <p key={item.node.id}>{beer.soort} - {beer.alcoholgehalte}%</p>
        </Link>
      })}
    </Layout>
  )
}
export const query = graphql`
query {
    allWpBeer {
      edges {
        node {
          beerMeta {
            alcoholgehalte
            soort
          }
          id
          slug
        }
      }
   }
 }
`
export default BeersPage