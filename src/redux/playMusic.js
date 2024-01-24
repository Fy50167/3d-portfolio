import { createSlice } from '@reduxjs/toolkit'

export const playMusic = createSlice({
  name: 'isPlaying',
  initialState: {
    value: false,
  },
  reducers: {
    musicTrue: (state) => {
      state.value = true;
    },
    musicFalse: (state) => {
      state.value = false;
    }
}
})

export const { musicTrue, musicFalse } = playMusic.actions

export default playMusic.reducer