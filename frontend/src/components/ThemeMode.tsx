import { useContext, useState } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';
import { getCurrentBackgroundMusic, playLoopSound, stopSound, type SoundKey } from '../utilities/soundController';


const ThemeMode = () => {

    const { isLightTheme, setIsLightTheme } = useContext(UserContext) as UserContextType;
    const [ speakerOn, setSpeakerOn ] = useState(true);
    
    function handleClick() {
        setIsLightTheme(prev => !prev);
    }

    function clickVolume() {
        let music: SoundKey | null = getCurrentBackgroundMusic();
        if (speakerOn && music !== null) {
            stopSound(music);
        } else if (!speakerOn && music !== null) {
            playLoopSound(music);
        }
        setSpeakerOn(prev => !prev);
    }

    return (
        <div className="theme-volume-container">
            <div className="theme-container">
                <div className="theme-btn-container">
                    <div 
                        className={`theme-btn ${isLightTheme ? 'light-mode' : 'dark-mode'}`}
                        onClick={handleClick}>
                        <span className="theme material-symbols-outlined">
                            {isLightTheme ? 'light_mode' : 'dark_mode'}
                        </span>
                    </div>
                </div>
            </div>
            <div className='volume-container'>
                <span className={`material-symbols-outlined volume ${speakerOn ? 'speaker-on' : 'speaker-off'}`} onClick={() => clickVolume()}>{speakerOn ? 'volume_up' : 'volume_off'}</span>
            </div>
        </div>
    )
}

export default ThemeMode