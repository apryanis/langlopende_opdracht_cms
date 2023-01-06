import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function menuItem(props) {
    const text = props.text;
    const link = props.link;
      return (
          <a href={link}>{text}</a>
      );
  }
  
  export default menuItem