import { useContext, useEffect, useState } from 'react';
import { getLeaderboard } from '../api/scoreApi';
import Button from './Button';
import getRankBackgroundColor from '../utilities/getRankBackgroundColor';
import UserContext, { type UserContextType } from '../context/UserContext';
import { playSound } from '../utilities/soundController';
import { useNavigate } from 'react-router-dom';
import useGameReset from '../utilities/useGameReset';


type showType = {
  rank: number | null,
}

const LeaderBoardPage = ({rank}: showType) => {
  const { leaderBoardView, setLeaderBoardView, leaderBoardData, setLeaderBoardData, setShowPlayBtn  } = useContext(UserContext) as UserContextType;
  const viewTopPlayers = leaderBoardView === 'top-players'; 
  const [ loadingScore, setLoadingScore ] = useState<boolean>(false);
  const gameReset = useGameReset();
  const nav = useNavigate();


  useEffect(() => {
    if (viewTopPlayers === null) return;

    const fetchData = async () => {
      const data = await getLeaderboard(viewTopPlayers);
      setLeaderBoardData(data);
      setLoadingScore(true);
    }

    fetchData();
  },[leaderBoardView]);

  function handleLeaderBoard() {
    setLeaderBoardView('all-time');
    setShowPlayBtn(true);
  }

  function btnClick(page: string) {
    playSound('click');
    gameReset();
    nav(`/${page}`)
  }

  return (
    <div className='leaderboard-container'>
     { !loadingScore 
      ? <div className='qualify-check'>Checking your score...</div>   
      : <>
          <div className='leaderboard-title'>{ viewTopPlayers ? 'TOP 25 PLAYERS' : 'ALL-TIME RECORD'}</div>
          <div className='leaderboard-header-container'>
            <div className='leaderboard-header leaderboard-header-rank'>Rank</div>
            <div className='leaderboard-header leaderboard-header-name'>Player's Name</div>
            <div className='leaderboard-header leaderboard-header-level'>Level</div>
            <div className='leaderboard-header leaderboard-header-value'># of Balls Popped</div>
            <div className='leaderboard-header leaderboard-header-time'>Time (secs)</div>
            <div className='leaderboard-header leaderboard-header-date'>Date Played</div>
            <div className='leaderboard-header leaderboard-header-status'>Status</div>
          </div>  
          <div className={viewTopPlayers ? 'leaderboard-items-top-players-container' : 'leaderboard-items-container'}>
            { leaderBoardData.map((item, i) =>
              (
                <div key={item.id} className='leaderboard-item-container' 
                    style={{backgroundColor: getRankBackgroundColor(rank, i), 
                            fontWeight: rank === i + 1 ? 'bold' : 'normal',
                            fontSize: rank === i + 1 ? '1.2rem' : '1rem',
                            color: rank === i + 1 ? 'var(--leaderboard-player-name)' : 'var(--shadow-color'}}>
                  <div className={`leaderboard-item-rank leaderboard-item`} >{i+1}</div>
                  <div className='leaderboard-item-name leaderboard-item'>{item.user.name}</div>
                  <div className='leaderboard-item-level leaderboard-item'>{item.level}</div>
                  <div className='leaderboard-item-value leaderboard-item'>{item.value}</div>
                  <div className='leaderboard-item-time leaderboard-item'>{item.time}</div>
                  <div className='leaderboard-item-date leaderboard-item'>
                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                  </div>
                  <div className='leaderboard-item-status leaderboard-item'>{item.user.status}</div>
                </div>
              )
            )}
          </div>
          { viewTopPlayers && 
            <div className='leaderboard-top-player-btn-container'>
              <Button btnClass='leaderboard-all-time-btn leaderboard-page-btn btn' btnText='ALL-TIME Record' onClick={handleLeaderBoard} />
              <Button btnClass='leaderboard-play-again-btn leaderboard-page-btn play-btn btn' btnText='PLAY AGAIN' onClick={() => btnClick('play')}/>
              {/* <Button btnClass='leaderboard-quit-btn leaderboard-page-btn btn' btnText='MAIN PAGE' onClick={() => btnClick('')} /> */}
            </div>
          }
        </>
      }
    </div>
  )
}

export default LeaderBoardPage;