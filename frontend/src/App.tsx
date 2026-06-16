import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import PlayPage from './pages/PlayPage'
import { useRef, useState } from 'react'
import UserContext from './context/UserContext'
import type { BallCharacterType } from './types/BallCharacter'
import HowToPlayPage from './pages/HowToPlayPage'
import type { LeaderBoardType } from './context/scoreContext'
import GameConfig from './types/GameConfig'

function App() {
  const [ isLightTheme, setIsLightTheme ] = useState(true);
  const [ gameLevel, setGameLevel ] = useState<number>(0);  
  const [ ballsCharacter, setBallsCharacter ] = useState<BallCharacterType[]>([]);
  let ballRefs = useRef<HTMLElement[]>([]);
  const [ isAscending, setIsAscending ] = useState(true);
  const [ playKey, setPlayKey ] = useState(0);
  const [ hasTimer, setHasTimer ] = useState(false);
  const [ gameTimer, setGameTimer ] = useState<number>(0);
  const [ lives, setLives ] = useState<number>(GameConfig.lives); // Number of lives initialized at 3
  const [ showScore, setShowScore ] = useState<boolean>(false);
  const [ leaderBoardView, setLeaderBoardView ] = useState<'top-players' | 'all-time'>('all-time');
  const [ leaderBoardData, setLeaderBoardData ] = useState<LeaderBoardType[]>([]);
  const [ showPlayBtn, setShowPlayBtn ] = useState<boolean>(false);
  const [ showGameOver, setShowGameOver ] = useState(false);
  const [ finishedAllLevels, setFinishedAllLevels ] = useState(false);


  const value = {
    isLightTheme, setIsLightTheme,
    gameLevel, setGameLevel,
    ballsCharacter, setBallsCharacter,
    ballRefs,
    isAscending, setIsAscending,
    playKey, setPlayKey,
    hasTimer, setHasTimer,
    gameTimer, setGameTimer,
    lives, setLives,
    showScore, setShowScore,
    leaderBoardView, setLeaderBoardView,
    leaderBoardData, setLeaderBoardData,
    showPlayBtn, setShowPlayBtn,
    showGameOver, setShowGameOver,
    finishedAllLevels, setFinishedAllLevels
  }

  return (
    // <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/bubblitz/' : '/'}>

    // for gh-pages
    <BrowserRouter basename='/bubblitz/'>
    {/* <BrowserRouter basename='/'> */}

    {/* // for local access  */}
    {/* <BrowserRouter > */}
      <UserContext.Provider value={value}>
        <Routes >
          <Route index element={<MainPage/>} />
          <Route path='/play' element={<PlayPage key={playKey}/>} />
          <Route path='/how-to-play' element={<HowToPlayPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
