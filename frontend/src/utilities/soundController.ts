import intro from '../assets/sound/intro.wav'
import choice from '../assets/sound/choice.wav'
import click from '../assets/sound/click.wav'
import tick from '../assets/sound/tick.wav'
import gameover from '../assets/sound/gameover.wav'
import levelup from '../assets/sound/levelup.wav'
import losealife from '../assets/sound/losealife.wav'
import extralife from '../assets/sound/extralife.wav'
import finishedalllevels from '../assets/sound/finishedalllevels.mp3'
import background from '../assets/sound/background.mp3'
import onplay from '../assets/sound/onplay.mp3'


const sounds = {
    intro: new Audio(intro),
    choice: new Audio(choice),
    click: new Audio(click),
    tick: new Audio(tick),
    gameover: new Audio(gameover),
    levelup: new Audio(levelup),
    losealife: new Audio(losealife),
    extralife: new Audio(extralife),
    finishedalllevels: new Audio(finishedalllevels),
    background: new Audio(background),
    onplay: new Audio(onplay),
};

export type SoundKey = keyof typeof sounds;
let currentMusic: HTMLAudioElement | null = null;
let currentBackgroundMusic: SoundKey | null = null;


export const getSound = (key: SoundKey) => {
  return sounds[key]
}

export const playSound = (key: SoundKey) => {
  const sound = sounds[key];
  if (!sound) return;

  sound.currentTime = 0;
  sound.play();
  sound.volume = 0.8;
  sound.playbackRate = 1;
};

export const stopSound = (key: SoundKey) => {
  const sound = sounds[key];
  if (!sound) return;

  sound.pause();
  sound.currentTime = 0;
  sound.volume = 1;
}


export const playLoopSound = (key: SoundKey) => {
  const sound = sounds[key];
  currentBackgroundMusic = key;

  if (!sound) return;

  if (currentMusic === sound && !sound.paused) return;

  if (currentMusic) {
    currentMusic.pause();
    currentMusic.currentTime = 0;
  }
   
  currentMusic = sound;
  sound.loop = true;
  sound.play();
  sound.playbackRate = 1;
}

export const getCurrentBackgroundMusic = () => {
  return currentBackgroundMusic;
}