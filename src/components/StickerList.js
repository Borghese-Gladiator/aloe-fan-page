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
    window.open(props.url, "_blank");
  }
  const renderSwitch = (param) => {
    switch(param) {
      case 'twitter':
        return <Button size="small" color="primary" onClick={handleCardClick}>Twitter</Button>
      case 'reddit':
        return <Button size="small" color="primary" onClick={handleCardClick}>Reddit</Button>
      case 'pixiv':
        return <Button size="small" color="primary" onClick={handleCardClick}>Pixiv</Button>
      default:
        return <Button size="small" color="primary" onClick={handleCardClick}>Reddit</Button>
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            {props.title}
          </Typography>
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
  // Require image assets/img folder
  function requireAll(r) { return r.keys().forEach(r); }
  const blah = requireAll(require.context('../assets/img', true, /.*/));
  console.log(blah)
  console.log(require.context('../assets/img', true, /.*/))
  const itemList = [
    new StickerObj("../assets/img/Aloe-Shamiko-Edit.gif", "Aloe Shock", "Reddit", "https://www.reddit.com/r/Hololive/comments/ibnkxi/just_want_to_cheer_up_aloe_and_all_fans_of_her/")
  ] 
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
        {itemList.map((val, idx) => (
          <Grid key={"VTuber_Card_" + idx} item xs={3}>
            <StickerCard
              path={val.path}
              title={val.title}
              source={val.source}
              url={val.url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}