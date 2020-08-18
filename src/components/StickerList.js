import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Card, CardContent, CardActionArea, Typography, CardActions } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  gifStyle: {
    maxHeight: 498
  }
}));

function StickerCard(props) {
  const classes = useStyles();
  const handleCardClick = () => {
    const imgUrl = "https://" + window.location.hostname + props.path
    window.prompt("Copy image URL to clipboard: Ctrl+C, Enter", imgUrl);
  }
  const handleButtonClick = () => {
    window.open(props.url, "_blank");
  }
  const renderSwitch = (param) => {
    switch(param) {
      case 'twitter':
        return <Button size="small" color="primary" onClick={handleButtonClick}>Twitter</Button>
      case 'reddit':
        return <Button size="small" color="primary" onClick={handleButtonClick}>Reddit</Button>
      case 'pixiv':
        return <Button size="small" color="primary" onClick={handleButtonClick}>Pixiv</Button>
      default:
        return <Button size="small" color="primary" onClick={handleButtonClick}>Reddit</Button>
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <img src={props.path} alt="loading..." className={classes.gifStyle} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        { renderSwitch(props.source) }
      </CardActions>
    </Card>
  )
}

function StickerObj(path, title, siteSource, url) {
  this.path = path
  this.title = title
  this.source = siteSource
  this.url = url
}

export default function StickerList() {
  // using name to match source/url data with image file in folder
  const urlArr = [
    { name: "./Aloe-Shamiko-Edit.gif", source: "reddit", url: "https://www.reddit.com/r/Hololive/comments/ibnkxi/just_want_to_cheer_up_aloe_and_all_fans_of_her/" },
    { name: "./83565064_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83565064" },
    { name: "./EfoJaFuU0AEQbK_.jpg", source: "twitter", url: "https://twitter.com/StevenGanArt/status/1295358194273796097" },
    { name: "./83752741_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83752741" },
    { name: "./83706782_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83706782" },
    { name: "./83739888_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83739888" },
    { name: "./83736724_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83736724" },
    { name: "./83615033_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83615033" },
    { name: "./83635420_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83635420" },
    { name: "./83532087_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83532087" },
    { name: "./83574888_p0_master1200.jpg", source: "pixiv", url: "https://www.pixiv.net/en/artworks/83574888" },
    { name: "./83504226_p0_master1200.jpg", source: "reddit", url: "https://www.pixiv.net/en/artworks/83504226" }
  ]
  const stickerList = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    const pathsArr = keys.reduce((arr, k, i) => { const a = { "path": values[i], "name": k, }; arr.push(a); return arr }, [])
    return pathsArr.reduce((arr, obj, i) => {
      console.log(obj.name)
      let urlObj = urlArr.find(o => o.name === obj.name);
      const a = {
        "path": obj.path,
        "name": obj.name,
        "source": urlObj.source,
        "url": urlObj.url
      }
      arr.push(a)
      return arr
    }, [])
  })(require.context('../assets/img', true, /.*/)); // Import all image assets
  
  return ( 
    <Container>
      <h1 style={{
        backgroundColor: "rgb(242, 196, 141)",
        color: "#FFF",
        textAlign: "center",
        fontSize: '50px'
      }}>
        Stickers List
      </h1>
      <h3>Instructions</h3>
      <p>Click on emoji to copy link to clipboard and Ctrl+V paste into Discord DM</p>
      <Grid container justify="center" spacing={3}>
        {stickerList.map((val, idx) => (
          <Grid key={"VTuber_Card_" + idx} item xs={3}>
            <StickerCard
              path={val.path}
              name={val.name}
              source={val.source}
              url={val.url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}