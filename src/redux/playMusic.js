import { createSlice } from '@reduxjs/toolkit'

export const playMusic = createSlice({
  name: 'isPlaying',
  initialState: {
    value: false,
  },
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    }
}
})

export const { setTrue, setFalse } = playMusic.actions

export default playMusic.reducer