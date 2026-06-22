import { type Dispatch, type RefObject, type SetStateAction, createContext} from 'react'
import type { BallCharacterType } from '../types/BallCharacter';
import type { LeaderBoardType } from './scoreContext';

export interface UserContextType {
    isLightTheme: boolean;
    setIsLightTheme: Dispatch<SetStateAction<boolean>>; 
    gameLevel: number;
    setGameLevel: Dispatch<SetStateAction<number>>;
    ballsCharacter: BallCharacterType[];
    setBallsCharacter: Dispatch<SetStateAction<BallCharacterType[]>>;
    ballRefs: RefObject<HTMLElement[]>;
    isAscending: boolean;
    setIsAscending: Dispatch<SetStateAction<boolean>>;
    playKey: number;
    setPlayKey: Dispatch<SetStateAction<number>>;
    hasTimer: boolean;
    setHasTimer: Dispatch<SetStateAction<boolean>>;
    gameTimer: number;
    setGameTimer: Dispatch<SetStateAction<number>>;
    lives: number;
    setLives: Dispatch<SetStateAction<number>>;
    showScore: boolean;
    setShowScore: Dispatch<SetStateAction<boolean>>;
    leaderBoardView: 'top-players' | 'all-time';
    setLeaderBoardView: Dispatch<SetStateAction<'top-players' | 'all-time'>>;
    leaderBoardData: LeaderBoardType[];
    setLeaderBoardData: Dispatch<SetStateAction<LeaderBoardType[]>>;
    showPlayBtn: boolean;
    setShowPlayBtn: Dispatch<SetStateAction<boolean>>;
    showGameOver: boolean;
    setShowGameOver: Dispatch<SetStateAction<boolean>>;
    finishedAllLevels: boolean;
    setFinishedAllLevels: Dispatch<SetStateAction<boolean>>;
    speakerOn: boolean;
    setSpeakerOn: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export default UserContext