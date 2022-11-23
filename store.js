import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './eventReducer'

export default configureStore({
  reducer: {
    event: eventReducer},
})