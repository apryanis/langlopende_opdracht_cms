import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'


const BeersPage = ({data: {wpBeer: {beerMeta: beer}}}) => {
  return (
    <Layout pageTitle="Top 5 - Belgische trappistenbieren ">
    <div>
      <h3>{beer.slug}</h3>
      <h1>{beer.soort}</h1>
      <div dangerouslySetInnerHTML={{__html: beer.korteBeschrijving}} />
      <p>Alcoholgehalte: {beer.alcoholgehalte}</p>
      <p>Zuur: {beer.zuur}</p>
      <p>Zoet: {beer.zoet}</p>
      <p>Bitter: {beer.bitter}</p>
      <p>Aroma: {beer.aroma}</p>
      <p style={{fontSize:"13px"}}>&copy; 2023 Bierista.nl</p>
    </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpBeer(id: {eq: $id}) {
        slug
        beerMeta {
          soort
          alcoholgehalte
          korteBeschrijving
          zuur
          zoet
          bitter
          aroma
        }
  }
}
 
`

export default BeersPage