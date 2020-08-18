import React, { lazy } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import TwitterLastPost from './components/TwitterLastPost'
import YoutubeLastPost from './components/YoutubeLastPost'
import StickerList from './components/StickerList' 
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const AvatarComponent = lazy(() => import('./components/Header'));

const DetailsComponent = () => (
  <div>
    <AvatarComponent />
  </div>
)

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
      <YoutubeLastPost />
      <TwitterLastPost />
      <StickerList />
    </div>
  );
}

export default App;