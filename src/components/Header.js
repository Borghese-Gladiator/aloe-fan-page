import React from 'react'
import manogSvg from "../assets/Twemoji12_1f445.svg"
import manoWideImg from "../assets/Mano_Aloe_Border.jpg"
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Header() {
  return (
    <header className="App-header">
      <img src={manoWideImg} alt="Mano Background"/>
      <div style={{display:"flex"}}>
        <img src={manogSvg} className="App-logo" alt="logo" style={{maxWidth:"100px", maxHeight: "100px"}}/>
        <h1><span role="img" aria-label="mano emoji">👅</span> 魔の友 (Manotomo) <span role="img" aria-label="mano emoji">👅</span></h1>
        <img src={manogSvg} className="App-logo" alt="logo" style={{maxWidth:"100px", maxHeight: "100px"}}/>
      </div>
      <div>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCgZuwn-O7Szh9cAgHqJ6vjw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon style={{ fontSize: 80, fill: "red" }} />
        </a>
        <a
          className="App-link"
          href="https://twitter.com/manoaloe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon style={{ fontSize: 80, fill: "blue" }} />
        </a>
      </div>
    </header>
  )
}