import React from 'react'

export default function Footer() {
  const footerStyles = {
    textAlign: "center",
    maring: "5px",
    padding: "3px",
    backgroundColor: "black",
    color: "white"
  }
  return (
    <footer style={footerStyles}>
      <p>Please show your support for Mano Aloe during this difficult time.<br/>
      <a href="mailto:timtimysss@hotmail.com" style={{color:"inherit"}}>Email here with questions</a></p>
    </footer>
  )
}