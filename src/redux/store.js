import { configureStore } from '@reduxjs/toolkit'
import viewContent from './viewContent';

export default configureStore({
  reducer: {
    content: viewContent
  },
})