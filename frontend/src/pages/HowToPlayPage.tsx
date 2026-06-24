import { useContext } from 'react'
import Footer from '../components/Footer'
import ThemeMode from '../components/ThemeMode'
import UserContext, { type UserContextType } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { playSound } from '../utilities/soundController'
import useGameReset from '../utilities/useGameReset'

const HowToPlayPage = () => {
    const { isLightTheme } = useContext(UserContext) as UserContextType;
    const mode = isLightTheme ? 'light-mode' : 'dark-mode';
    const nav = useNavigate();
    const gameReset = useGameReset();

    function handleClick( page:string ) {
        playSound('click');
        if (page === 'play') {
            gameReset();
        }
        nav(`/${page}`);
    }

    return (
        <div className={`how-to-play-page-container ${mode}`}>

         {/* Header  */}
            <div className='how-to-play-header-theme-container'>
                <header className="how-to-play__header-container">
                    <h1 className="how-to-play__title">How to Play</h1>
                    <p className="how-to-play__subtitle">
                    Pop, think fast, and survive the Bubblitz!
                    </p>
                </header>
                <ThemeMode />
            </div>

            {/* Objective */}
            <div className='how-to-play-content-container'>
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">🎯 Objective</h2>
                    <p className="how-to-play__text">
                    Each level generates a set of numbered balls inside the play area.
                    Your goal is to <strong>pop the balls in the correct order</strong> based on the instruction shown at the start of the level.
                    </p>
                    <ul className="how-to-play__list">
                        <li>Ascending order (lowest to highest)</li>
                        <li>Descending order (highest to lowest)</li>
                    </ul>
                </section>

                {/* Basic Rules  */}
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">🟢 Basic Rules</h2>
                    <ul className="how-to-play__list">
                        <li>Each level contains at least <strong>8 balls</strong></li>
                        <li>Every ball has a <strong>unique value</strong></li>
                        <li>Click balls <strong>one at a time</strong></li>
                        <li>Clicking the wrong ball costs <strong>one life</strong></li>
                        <li>Running out of time also costs <strong>one life</strong></li>
                    </ul>
                </section>

                {/* Difficulty  */}
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">🧠 Increasing Difficulty</h2>
                    <p className="how-to-play__text">
                    As you progress, balls gain new behaviors designed to challenge your attention, memory, speed and accuracy.
                    </p>

                    <ul className="how-to-play__list how-to-play__list--behaviors">
                        <li>Balls may move side-to-side or up-and-down</li>
                        <li>Balls may rotate clockwise or counterclockwise</li>
                        <li>Ball values may disappear and reappear</li>
                        <li>Balls may shrink and return to normal size</li>
                        <li>Multiple behaviors may happen at the same time</li>
                    </ul>
                </section>

                {/* Timed Levels */}
                <section className="how-to-play__section how-to-play__section--highlight">
                    <h2 className="how-to-play__heading">⏱️ Timed Levels</h2>
                    <p className="how-to-play__text">
                    Every level has a time limit. The game starts with more time, but the time limit becomes shorter as you reach higher levels.
                    </p>
                    <ul className="how-to-play__list">
                        <li>The starting time limit is <strong>40 seconds</strong></li>
                        <li>You must finish each level before time runs out</li>
                        <li>The timer continues while balls move, rotate, shrink and animate</li>
                        <li>Running out of time counts as a failed attempt and cost one life</li>
                    </ul>
                </section>

                {/* Lives  */}
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">❤️ Lives & Progression</h2>
                    <ul className="how-to-play__list">
                        <li>You start with <strong>3 lives</strong></li>
                        <li>Each mistake or timeout costs one life</li>
                        <li>Every time you complete <strong>10 levels</strong>, one life is added to your current lives</li>
                        <li>You may continue as long as you still have lives remaining</li>
                        <li>Lose all lives and the game ends</li>
                    </ul>
                </section>

                {/* Leaderboard */}
                <section className="how-to-play__section how-to-play__section--highlight">
                    <h2 className="how-to-play__heading">🏆 Leaderboard & Scoring</h2>
                    <p className="how-to-play__text">
                    Bubblitz includes an online leaderboard where top scores are saved and ranked.
                    Your final result is evaluated after the game ends.
                    </p>
                    <ul className="how-to-play__list">
                        <li>Scores are ranked by level reached, score value, and completion time</li>
                        <li>The leaderboard stores top player results online</li>
                        <li>You can view the all-time leaderboard from the main page</li>
                        <li>The highest-ranking players are displayed in the Top 25 leaderboard</li>
                    </ul>
                </section>

                {/* Top 25 Qualification */}
                <section className="how-to-play__section">
                    <h2 className="how-to-play__heading">⭐ Top 25 Qualification</h2>
                    <p className="how-to-play__text">
                    After Game Over, your score is checked to see if it qualifies for the current Top 25 leaderboard.
                    </p>
                    <ul className="how-to-play__list">
                        <li>If your score qualifies, a submission form will appear</li>
                        <li>You may enter your name and email to save your score</li>
                        <li>After submitting, the Top 25 leaderboard will show your ranking</li>
                        <li>If your score does not qualify, you can try again and aim higher</li>
                    </ul>
                </section>
                
                {/* Tips */}
                <section className="how-to-play__section how-to-play__section--tips">
                    <h2 className="how-to-play__heading">🏆 Tips for Success</h2>
                    <ul className="how-to-play__list">
                        <li>Read the order instruction carefully before clicking</li>
                        <li>Track values even when they disappear</li>
                        <li>Anticipate movement patterns</li>
                        <li>Balance speed with accuracy</li>
                        <li>Stay calm — speed comes with focus</li>
                    </ul>
                </section>
            </div>
            <div className='how-to-play__btn-container'>
                <Button btnClass='how-to-play-main-page-btn how-to-play-btns btn' btnText='Main Page' onClick={() => handleClick('')} />
                <Button btnClass='how-to-play-play-btn how-to-play-btns play-btn btn' btnText={`Let's play!`} onClick={() => handleClick('play')}  />
            </div>
    
            <Footer />
        </div>
    )
}

export default HowToPlayPage