import { configureStore } from '@reduxjs/toolkit'
import featuresReducer from './redux/Slices/featuresSlice'

const store = configureStore({
  reducer: {
    features: featuresReducer,
  },
})

export default store
