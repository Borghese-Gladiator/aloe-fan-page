import React, { lazy } from 'react';
import Header from './components/Header'
import TwitterLastPost from './components/TwitterLastPost'
import YoutubeLastPost from './components/YoutubeLastPost'
import StickerList from './components/StickerList' 
import ExitFooter from './components/ExitFooter'
import Footer from './components/Footer'
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
      <YoutubeLastPost />
      <TwitterLastPost />
      <StickerList />
      <div style={{height:"1000px"}} />
      <ExitFooter />
      <Footer />
    </div>
  );
}

export default App;