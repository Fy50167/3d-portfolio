import { configureStore } from '@reduxjs/toolkit'
import viewContent from './viewContent';
import playMusic from './playMusic';

export default configureStore({
  reducer: {
    content: viewContent,
    isPlaying: playMusic
  },
})