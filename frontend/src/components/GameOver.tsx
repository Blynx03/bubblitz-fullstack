import { useContext, useEffect, useState } from 'react';
import Button from './Button'
import { checkScore, submitScore } from '../api/scoreApi';
import type { checkScoreType, submitScoreType } from '../context/scoreContext';
import type { UserContextType } from '../context/UserContext';
import UserContext from '../context/UserContext';
import LeaderBoardPage from './LeaderBoardPage';
import { playLoopSound, playSound, stopSound } from '../utilities/soundController';
import FinishedAllLevels from './FinishedAllLevels';
import useGameReset from '../utilities/useGameReset';
import { useNavigate } from 'react-router-dom';

type GameOverProps = {
  score: checkScoreType | null,
  finishedAllLevels: boolean
}

const GameOver = ({ score, finishedAllLevels }: GameOverProps) => {
  const { showScore, setShowScore, setLeaderBoardView, setLeaderBoardData, setShowPlayBtn } = useContext(UserContext) as UserContextType; 
  const { level, value, time } = score as submitScoreType;
  const [ isQualified, setIsQualified ] = useState<boolean | null>(null);
  const [ rank, setRank ] = useState<number>(0);
  const [ inputError, setInputError ] = useState<boolean>(false);
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ finishedAllLevelsWindow, setFinishedAllLevelsWindow ] = useState(false);
  const gameReset = useGameReset();
  const nav = useNavigate();

  // check score data if on top 25. If not, rank should be returned
  useEffect(() => {
    if (score === null) return;

    if (finishedAllLevels) {
      setIsQualified(true);
      playLoopSound('finishedalllevels');
      setRank(1);
    } else {
      stopSound('onplay');
      playLoopSound('background');
  
      const fetchQualification = async () => {
        let res = await checkScore(score);
        setIsQualified(res.qualifies);
        if (res.qualifies === true) {
          setRank(res.rank);
        } else {
          setRank(0);
        }
      };
      fetchQualification();
    }
  },[]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, inputField: string) {
    let inputValue: string = e.target.value;
    if (inputField === 'name') {
      setName(inputValue);
    } else if (inputField === 'email') {
      setEmail(inputValue);
    } 
  }

  const handleSubmit = async () => {
    if (name === '' || email === '')  {
      setInputError(true);
      return;
    }
    setInputError(false);
    let scoreData = {
      name,
      email,
      level,
      value,
      time
    }

    // handle submit is executed because the player made it to the top 25, so leaderboard view should be top-players
    if (finishedAllLevels) {
      setFinishedAllLevelsWindow(true);
    } else {
      setLeaderBoardView('top-players');
      setShowScore(true);
    }
    
    const data = await submitScore(scoreData); // returns the top 25 players info
    setLeaderBoardData(data);
  }

  function leaderboardClick() {
    setLeaderBoardView('all-time');
    setShowPlayBtn(true);
    setShowScore(true);
  }

  function btnClick(page: string) {
    playSound('click');
    playSound('intro');
        
    // resets values and start play
    gameReset();
    nav(`/${page}`)
  }

  return ( 
    showScore
    ? <LeaderBoardPage rank={rank} />
    :
      <div className='game-over-container'>
        { finishedAllLevelsWindow 
            ? <FinishedAllLevels /> 
            : isQualified === null 
              ? <div className='qualify-check'>Checking your score...</div>  
              : isQualified 
                ? <>
                    <div className='qualify-title'>Congratulations!!!</div> 
                    <div className='qualify-sub-title'>You are among the ELITE 25!</div>
                    <div className='qualify-sub-title'>Own It! Post Your Score!</div>
                    <div className='qualify-sub-title qualify-sub-title-rank'>{`You rank #${rank}`}</div>
                    <div className='qualify-input-name-container'>
                      <div className='qualify-name'>Name: </div>
                      <input id='name' type='text' className='qualify-input-name' onChange={(e) => handleChange(e, 'name')} placeholder='Enter Name or Nickname'/>
                    </div>
                    <div className='qualify-input-email-container'>
                      <div className='qualify-email'>Email:</div>
                      <input id='email' type='email' className='qualify-input-email' onChange={(e) => handleChange(e, 'email')} placeholder='Enter Email Address'/>
                    </div>
                    <Button btnClass='submit-score-btn btn' btnText='SUBMIT' onClick={handleSubmit}/>
                    {inputError && 
                      <div className='qualify-error'>
                        {name === '' ? 'Name is required' : email === '' ? 'Email is required' : null}
                      </div>
                    }
                  </>
                : <>
                    <div className='game-over'>GAME OVER!</div>
                    <div className='game-over-qualify'>You didn't make it to the TOP 25!</div>
                    { rank !== 0 ? <div className='game-over-rank'>{`Rank: ${rank}`}</div> : null }
                    <div className='game-over-btns-container'>
                      <Button btnClass='game-over-play-again-btn btn' btnText='PLAY AGAIN' onClick={() => btnClick('play')}/>
                      <Button btnClass='game-over-leaderboard-btn btn' btnText='ALL-TIME Record' onClick={leaderboardClick} />
                      <Button btnClass='game-over-quit-btn btn' btnText='QUIT' onClick={() => btnClick('')} />  
                    </div>
                  </>
        }
      </div>
  )
}

export default GameOver