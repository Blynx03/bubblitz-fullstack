import { useContext } from 'react'
import Title from '../components/Title'
import Footer from '../components/Footer'
import DemoArea from '../components/DemoArea'
import UserContext, { type UserContextType } from '../context/UserContext'
import TitleCaption from '../components/TitleCaption'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import ThemeMode from '../components/ThemeMode'
import { playSound } from '../utilities/soundController'
import useGameReset from '../utilities/useGameReset'

const MainPage = () => {
    const { isLightTheme, setShowScore, setLeaderBoardView } = useContext(UserContext) as UserContextType;
    let mode = isLightTheme ? 'light-mode' : 'dark-mode';
    const nav = useNavigate();
    const gameReset = useGameReset();


    function handleClick(page: string) {
        playSound('click');
        if (page === 'play') {
            playSound('intro');

            // reset values            
            gameReset();
        }
        
        if (page === 'leaderboard') {
            setShowScore(true);
            setLeaderBoardView('all-time');
            return
        }
        nav(`/${page}`);
    }

    return (
        <div className={`main-page-container ${mode}`}>
            <div className="main-title-and-theme-container">
                <Title />
                <ThemeMode />
            </div>
            <TitleCaption />
            <DemoArea />
            <div className='main-btn-container'>
                <Button btnClass='how-to-btn btn' btnText='How To Play' onClick={() => handleClick('how-to-play')} />
                <Button btnClass='play-btn btn' btnText={`Let's Play`} onClick={() => handleClick('play')} />
                <Button btnClass='leaderboard-btn btn' btnText='Show Leaderboard' onClick={() => handleClick('leaderboard')} />
            </div>
            <Footer />
        </div>
    )
}

export default MainPage