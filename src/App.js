import React, { lazy } from 'react';
import Header from './components/Header'
import TwitterLastPost from './components/TwitterLastPost'
import YoutubeLastPost from './components/YoutubeLastPost'
import StickerList from './components/StickerList' 
import ExitFooter from './components/ExitFooter'
import Footer from './components/Footer'
import './App.css';
import manoMP3 from './assets/LOADING_AUDIO_3s_to_17s_【初配信】ホロライブ5期生、魔乃アロエだぞ【_ほろふぁいぶ】.mp3'

const AvatarComponent = lazy(() => import('./components/Header'));

const DetailsComponent = () => (
  <div>
    <AvatarComponent />
  </div>
)

function App() {

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