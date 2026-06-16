// import { useContext } from 'react'
// import UserContext, { type UserContextType } from '../context/UserContext'
// import GameConfig from '../types/GameConfig';
// import { useNavigate } from 'react-router-dom';
// import { stopSound } from './soundController';

// export const startGame = (page: string) => {
//     const nav = useNavigate();  
//     const { 
//         setGameLevel, 
//         setLives, 
//         setBallsCharacter, 
//         setPlayKey, 
//         setShowScore, 
//         setShowGameOver, 
//         setShowPlayBtn, 
//         finishedAllLevels,
//         setFinishedAllLevels 
//     } = useContext(UserContext) as UserContextType;
        
  
//     setGameLevel(1);
//     setLives(GameConfig.lives);
//     setBallsCharacter([]);
//     setPlayKey(key => key + 1);
//     setShowScore(false);
//     setShowGameOver(false);
//     setShowPlayBtn(false);
//     if (finishedAllLevels) {
//         setFinishedAllLevels(false);
//         stopSound('finishedalllevels');
//     }
    
//     if (!page) return;
    
//     nav(`/${page}`);
// }

// export default startGame