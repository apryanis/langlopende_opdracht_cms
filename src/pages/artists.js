import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const ArtistsPage = ({data: {allWpBeer: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      {edges.map((item) => {
        const beer = item.node.beerMeta;
        return <p key={item.node.id}>{beer.soort} {beer.alcoholgehalte}</p>
      })}
    </Layout>
  )
}
export const query = graphql`
query {
    allWpBeer {
     edges {
       node {
         id
         beerMeta {
           soort
           alcoholgehalte
         }
       }
     }
   }
 }
`
export default ArtistsPage