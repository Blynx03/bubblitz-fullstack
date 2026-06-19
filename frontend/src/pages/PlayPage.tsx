import { useContext, useEffect, useRef, useState } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';
import type { BallCharacterType } from '../types/BallCharacter';
import generateBallCharacters from '../utilities/generateBallCharacters';
import useContainerSize from '../hooks/useContainerSize';
import animateContainer from '../utilities/animateContainer';
import ThemeMode from '../components/ThemeMode';
import Title from '../components/Title';
import GameOver from '../components/GameOver';
import Button from '../components/Button';
import Footer from '../components/Footer';
import ShowTimer from '../components/ShowTimer';
import { LEVEL_CONFIG } from '../types/LevelConfig';
import { getSound, playLoopSound, playSound, stopSound } from '../utilities/soundController';
import type { checkScoreType } from '../context/scoreContext';
import GameConfig from '../types/GameConfig';
import useGameReset from '../utilities/useGameReset';
import { useNavigate } from 'react-router-dom';

const PlayPage = () => {
  const playAreaRef = useRef<HTMLDivElement | null>(null);
  const container = useContainerSize(playAreaRef);
  const { isLightTheme, 
          isAscending, 
          setIsAscending, 
          gameLevel, 
          setGameLevel, 
          lives,
          setLives,
          gameTimer, 
          setGameTimer, 
          ballsCharacter, 
          setBallsCharacter, 
          ballRefs, 
          hasTimer,
          setHasTimer, 
          showPlayBtn,
          showGameOver,
          setShowGameOver,
          finishedAllLevels, 
          setFinishedAllLevels
        } = useContext(UserContext) as UserContextType;


  const mode = isLightTheme ? 'light-mode' : 'dark-mode';
  const [ targetBallIndex, setTargetBallIndex ] = useState<number>(0);
  const [ animateLives, setAnimateLives ] = useState(false);
  const [ animateLevel, setAnimateLevel ] = useState(false);
  const [ scoreData, setScoreData ] = useState<checkScoreType | null>(null);
  const [ correctBallsPopped, setCorrectBallsPopped ] = useState<number>(0) // This will store the number of balls popped in current level
  
  const maxGameLevel = GameConfig.maxLevel;
  const gameReset = useGameReset();
  const nav = useNavigate();

  useEffect(() => {
    stopSound('background');
    playLoopSound('onplay');
  },[]);

  useEffect(() => {
    if (!playAreaRef || !container) return;
    setIsAscending(true);
    setTargetBallIndex(0);
    ballRefs.current = [];

    const generatedBalls: BallCharacterType[] = generateBallCharacters(gameLevel, container, setIsAscending);
    setBallsCharacter(generatedBalls);

    const stopAnimation = animateContainer({container, generatedBalls, ballRefs});

    return () => {
      stopAnimation();
    };
  },[gameLevel, container]);

  useEffect(() => {
    if (LEVEL_CONFIG[gameLevel].timer) {
      setHasTimer(true);
      setGameTimer(LEVEL_CONFIG[gameLevel].timer);
    } else {
      setHasTimer(false)
    }
  },[gameLevel])

  useEffect(() => {
    setAnimateLives(true);
    const id = setTimeout(() => {
      setAnimateLives(false)}, 1000);
    return () => clearTimeout(id);
  },[lives]);

  useEffect(() => {
    setAnimateLevel(true);
    const id = setTimeout(() => {
      setAnimateLevel(false)}, 1000);
    return () => clearTimeout(id);
  },[gameLevel]);

  useEffect(() => {
    if (!hasTimer || showGameOver) return;

    if (gameTimer > 0) {
      const id = setInterval(() => {
        setGameTimer((prev) => {
          if (prev <= 1) {
            if (lives > 1) {
              const livesLeft = lives - 1;
              setLives(livesLeft);
              playSound('losealife');
              if (LEVEL_CONFIG[gameLevel].timer) {
                return LEVEL_CONFIG[gameLevel].timer;
              }
            }
            const score = { level: gameLevel, value: correctBallsPopped, time: 0 }
            setScoreData(score);
            setShowGameOver(true);
            stopSound('onplay');
            playSound('gameover');
            clearInterval(id);

            return 0;
          } else {
            playSound('tick')
            return prev - 1;
          }
          
        });
      }, 1000);
      return () => clearInterval(id);
    }
  }, [gameLevel, showGameOver, gameTimer]);

  // increasing the tension sound when it gets to 1 life left and timer is below 6 secs
  useEffect(() => {
    if (gameTimer <= 5 && lives === 1) {
          const music = getSound('onplay');
          music.playbackRate = 1.5;
          music.volume = 1;
        }
  },[gameTimer, lives]);

  // executes when player finished all levels and balls
  useEffect(() => {
    if (gameLevel > maxGameLevel && correctBallsPopped === LEVEL_CONFIG[maxGameLevel].numberOfBalls) {
      setFinishedAllLevels(true);
      setShowGameOver(true);
      stopSound('onplay');
    }
  }, [gameLevel, correctBallsPopped])

  const getAnimateValue = (ball: BallCharacterType | null, changeBallSize?: boolean ) => {
    let rotateDirection = '';
    if (ball) {
      rotateDirection = `${ball.rotate?.rotateClockwise ? 'rotate-cw' : 'rotate-ccw'}`
    }

    return (`${rotateDirection} linear 3s infinite 
            ${changeBallSize ? `, change-ball-size linear ${ball?.sizeChange?.sizeChangeSpeed}s infinite` : ''}`
    )}      


  // Game Logic
  
  function handleClick(clickedBall: BallCharacterType, el: HTMLElement | null) {
    if (!el) return;
    playSound('choice')
    if ( ballsCharacter[targetBallIndex].ballValue === clickedBall.ballValue) {
      // correct chosen ball
      const newTargetIndex = targetBallIndex + 1;
      el.style.animation = 'pop 50ms linear forwards';
      el.style.pointerEvents = 'none';
      el.addEventListener('animationend', () => 
        {
          removeBall(el);
        },
        { once: true }
      );
      setTargetBallIndex(newTargetIndex);

      if (ballsCharacter.length === newTargetIndex) {
        // after last correct ball is selected
        const newLevel = gameLevel + 1;

  // executes when player finished the max level (level 180)
        if (newLevel > maxGameLevel) {
          const score = {level: maxGameLevel, value: correctBallsPopped, time: gameTimer}
          setScoreData(score);
          stopSound('onplay');
          playLoopSound('finishedalllevels');
          setFinishedAllLevels(true);
          setShowGameOver(true);
        // } else if ([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180].includes(newLevel)) {
        //   setLives(prev => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180].includes(newLevel) ? prev + 1 : prev);
        //   playSound('extralife');
        //   setGameLevel(newLevel);
        //   setBallsCharacter([]);
        //   setCorrectBallsPopped(0);
        // } else {
        //     playSound('levelup');
        //     setGameLevel(newLevel);
        //     setBallsCharacter([]); 
        //     // resetting level value and time count to 0 for new level
        //     setCorrectBallsPopped(0);
        // } 
          } else {
          let extraLife = GameConfig.extraLifeLevels.includes(newLevel);
          setLives(prev => extraLife ? prev + 1 : prev);
          playSound(extraLife ? 'extralife' : 'levelup');
          setGameLevel(newLevel);
          setBallsCharacter([]);
          setCorrectBallsPopped(0);
        }
      }
      setCorrectBallsPopped((prev) => prev + 1);

    } else {
      // wrong chosen ball

        playSound('losealife');
        el.style.animation = 'shake 0.2s linear';
        const correctBall = ballRefs.current[clickedBall.ballId];
        
        if (!correctBall) return;

        correctBall.style.animation = 'change-background-color 0.2s linear';
        const child = correctBall.firstElementChild as HTMLElement | null;
        if (!child) return;

        child.style.animation = 'shake 0.1s linear';

      const livesLeft = lives - 1;
      setLives(livesLeft);

      // GAME OVER
      if (livesLeft <= 0) {
        const score = {level: gameLevel, value: correctBallsPopped, time: gameTimer}
        setScoreData(score); // This will be sent to Game Over Page as props
        stopSound('onplay');
        playSound('gameover');
        setShowGameOver(true);
      } else {
        setShowGameOver(false);
      }
    }
  }


  function removeBall(el: HTMLElement | null) {
    if (!el) return;
    el.style.display = 'none';
  }

  
  function btnClick(page: string) {
    playSound('click');
    playSound('intro');
    stopSound('onplay');
        
    // resets values and start play
    if (page === 'play') {
      gameReset();
    }
    nav(`/${page}`)
  }

  return (
    <div className={`play-page-container ${mode}`}>
      <div className='play-page-hud-container'>
        <div className='play-page-title-and-theme-container'>
          <Title />
          <ThemeMode />
        </div>
        <div className='play-page-instruction-container'>
            <span className='instruction-pre'>Pop the balls in&nbsp;</span>
            <span className='instruction-ball-order'>{isAscending ? 'ASCENDING' : 'DESCENDING'}</span>
            <span className='instruction-post'>&nbsp;order!</span>
        </div>
        <div className='play-page-level-timer-lives-container'>
          <div className='play-page-level'>Level: 
            <span className={`play-page-level-value ${animateLevel ? 'emphasize-level' : ''}`}> {gameLevel}</span>
          </div>
        {hasTimer ? <ShowTimer /> : null}
          <div className='play-page-lives'>Lives: 
            <span className={`play-page-lives-value ${animateLives ? 'emphasize-lives' : ''}`}> {lives}</span>
          </div>
        </div>
      </div>
      <div ref={playAreaRef} className='play-area-container'>
        {ballsCharacter.map((ball,i) => 
          (
            <div
              key={ball.ballId}
              ref={el => { if (el) ballRefs.current[ball.ballId] = el}}
              className={'ball'}
              onClick={() => handleClick(ball, ballRefs.current[ball.ballId])}
              style={{
                backgroundColor:`var(--ball-color${ball.ballColor})`, 
                width: ball.ballSize,
                height: ball.ballSize,
                pointerEvents: `${showGameOver ? 'none' : 'auto'}`,
                fontSize: `${ball.ballSize}px`,
                left: `${ball.xStartingPosition}px`,
                top: `${ball.yStartingPosition}px`,
                zIndex: ballsCharacter.length - i,
                // animation: ball.isRotating || ball.isChangingSize ? getAnimateValue(ball, ball.isChangingSize) : undefined
                animation: ball.isChangingSize ? getAnimateValue(ball, ball.isChangingSize) : undefined

              }}
                onAnimationEnd={() => showGameOver ? removeBall(ballRefs.current[ball.ballId]) : null}>
              <div 
                className={`ball-value ${[6, 9, 66, 68, 86, 89, 98, 99].includes(ball.ballValue) ? 'six-eight-nine' : ''}`}
                style={{
                  // animation: `${ball.isVanishingValue ? `vanish ${ball.vanishingSpeed}s linear infinite` : ''}`
                  animation: ball.isVanishingValue || ball.isRotating 
                                ? ball.isVanishingValue && ball.isRotating
                                    ? `vanish ${ball.vanishingSpeed}s linear infinite, ${getAnimateValue(ball)}`
                                    : ball.isVanishingValue && !ball.isRotating
                                        ? `vanish ${ball.vanishingSpeed}s linear infinite`
                                        : `${getAnimateValue(ball)}`
                                : undefined
                }}>
              {ball.ballValue}
              </div>
            </div>
          ))
        }
        
        { showGameOver && <GameOver score={scoreData} finishedAllLevels={finishedAllLevels}/> }

      </div>
      <div className={ !showPlayBtn ? 'play-page-btn-container' : 'play-page-btn-container1'}>
        <Button btnClass='play-page-btns play-page-quit-btn quit-btn btn' btnText='Quit' onClick={() => btnClick('')} />
        { showPlayBtn && <Button btnClass='play-page-btns play-btn btn' btnText='Play Again' onClick={() => btnClick('play')} /> }
      </div>
      <Footer />
    </div>
  )
}

export default PlayPage 