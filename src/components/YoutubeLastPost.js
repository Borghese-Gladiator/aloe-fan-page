import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import manoSongVid from '../assets/141s_to_236s_【初配信】ホロライブ5期生、魔乃アロエだぞ【_ほろふぁいぶ】.mp4'

export default function YoutubeLastPost() {
  const backgroundStyling = {
    backgroundColor: "white"
  }
  return (
    <Container style={backgroundStyling}>
      <h1>Latest from Youtube</h1>
      <iframe width="1019" height="573" src= "https://www.youtube.com/embed/ZgkLtMAQ0rI?start=33&end=200" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Container>
  )
}

/*
<Grid container spacing={3}>
  <Grid item xs={10}>
    
  </Grid>
  <Grid item xs={2}>
    <div>
      <h5>Open in new tab to play video</h5>
      <video id="background-video" loop style={{width:"128", height: "72"}}>
        <source src={manoSongVid} type="video/mp4" />
        <source src={manoSongVid} type="video/ogg" />
        Your browser does not support the video tag
      </video>
    </div>
  </Grid>
</Grid>
*/