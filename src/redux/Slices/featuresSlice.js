import { createSlice } from '@reduxjs/toolkit'
import { getResData } from '../Thunks/featureThunk'

const initialState = {
  isLoading: false,
  restaurants: [],
}

const featureSlice = createSlice({
  name: 'features',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getResData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getResData.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.restaurants = payload?.filter(
          (res) => res.photo
        )
      })
      .addCase(getResData.rejected, (state, { payload }) => {
        state.isLoading = false
        console.log(payload)
      })
  },
})

export default featureSlice.reducer
