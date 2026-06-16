import Button from './Button'
import { useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'

const FinishedAllLevels = () => {
    const { setLeaderBoardView, setShowScore } = useContext(UserContext) as UserContextType;

    const handleClick = () => {
        setLeaderBoardView('all-time');
        setShowScore(true);
    }

    return (
        <div className='finished-all-levels-container'>
            <div className="finished-title">BUBBLITZ MASTER!</div>
            <div className="finished-sub-title">EVERY BUBBLE BURST! </div>
            <div className="finished-sub-title">YOU ARE A PRO!</div>
            <div className="finished-sub-title">THANKS FOR PLAYING!</div>
            <Button btnClass='finished-btn btn leaderboard-btn' btnText='Show Leaderboard' onClick={handleClick} />
        </div>    
    )
}

export default FinishedAllLevels