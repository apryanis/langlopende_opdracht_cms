import * as React from "react"

function menuItem(props) {
    const text = props.text;
    const link = props.link;
      return (
          <a href={link}>{text}</a>
      );
  }
  
  export default menuItem