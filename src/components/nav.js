import menuItem from "./menuItem"
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
function Nav() {
    return (
      <nav className="Nav">
        <menuItem link="/home" text="Home"/>
      </nav>
    )
  }
  
  export default Nav