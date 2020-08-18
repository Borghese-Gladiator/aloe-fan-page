import React from 'react'
import manoImg from "../assets/Mano_Aloe_Portrait.png"
import manoWideImg from "../assets/Mano_Aloe_Border.jpg"
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Header() {
  return (
    <header className="App-header">
      <img src={manoWideImg} />
      <img src={manoImg} className="App-logo" alt="logo" />
      <h1>	魔の友 (Manotomo)</h1>
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