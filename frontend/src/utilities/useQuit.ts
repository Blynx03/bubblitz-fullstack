// import { useCallback, useContext } from 'react'
// import UserContext, { type UserContextType } from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import { playLoopSound, playSound, stopSound } from './soundController';
// import GameConfig from '../types/GameConfig';

// const useQuit = () => {
//     const { setGameLevel, setLives, setBallsCharacter, setPlayKey, setShowScore, setShowGameOver, setShowPlayBtn, setFinishedAllLevels, ballRefs } = useContext(UserContext) as UserContextType;
//     const nav = useNavigate();

//     return useCallback(() => {
//         playSound('click');
//         stopSound('finishedalllevels');
//         stopSound('onplay');
//         playLoopSound('background');
//         setGameLevel(1);
//         setLives(GameConfig.lives)
//         setBallsCharacter([]);
//         setPlayKey(key => key + 1);
//         setShowScore(false);
//         setShowGameOver(false);
//         setShowPlayBtn(false);
//         setFinishedAllLevels(false);
//         ballRefs.current = [];
   
//     }, [setGameLevel, setBallsCharacter, setShowScore, ballRefs, nav])
    
// }

// export default useQuit