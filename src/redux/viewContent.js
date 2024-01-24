import { createSlice } from '@reduxjs/toolkit'

export const viewContent = createSlice({
  name: 'content',
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

export const { setTrue, setFalse } = viewContent.actions

export default viewContent.reducer