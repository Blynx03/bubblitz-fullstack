import { useCallback, useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'
import GameConfig from '../types/GameConfig';
import { stopSound } from './soundController';

const useGameReset = () => {
    const { 
        setGameLevel, 
        setGameTimer,
        setLives, 
        setBallsCharacter, 
        setPlayKey, 
        setShowScore, 
        setShowGameOver, 
        setShowPlayBtn,
        finishedAllLevels, 
        setFinishedAllLevels,
        ballRefs
    } = useContext(UserContext) as UserContextType;


    return useCallback(() => {
        setGameLevel(1);
        setGameTimer(0);
        setLives(GameConfig.lives);
        setBallsCharacter([]);
        setPlayKey(key => key + 1);
        setShowScore(false);
        setShowGameOver(false);
        setShowPlayBtn(false);
        ballRefs.current = [];

        if (finishedAllLevels) {
            setFinishedAllLevels(false);
            stopSound('finishedalllevels');
        }

    }, [ 
        // setPlayKey, 
        // setShowScore, 
        // setShowPlayBtn, 
        // setFinishedAllLevels,
        // ballRefs ]);
    ]);
}

export default useGameReset;