import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  wrapper,
  image,
  beerInfo,
  soort,
  fullName,
} from "../components/beer.module.css"
const Beer = ({ beer, slug }) => {
  const profile = getImage(beer.beerMeta.profilePicture.localFile)
  return (
    <Link className={wrapper} to={slug}>
      <GatsbyImage
       className={image}
        image={profile}
        alt={beer.beerMeta.profilePicture.altText}
      />
      <article className={beerInfo}>
        {beer.beerMeta.soort && <p className={soort}>{beer.beerMeta.alcoholgehalte}</p>}
        <p className={fullName}>
          {beer.beerMeta.soort} {beer.beerMeta.alcoholgehalte}
        </p>
      </article>
    </Link>
  )
}

export default Beer;