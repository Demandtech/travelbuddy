import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getResData = createAsyncThunk(
  'restaurant',
  async (bounds, thunkAPI) => {
    const headers = {
      'X-RapidAPI-Key': '2ee65057ebmsh0e1ff119f484787p17e21djsn1127c8e67e6d',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    }

    const params = {
      bl_latitude: bounds.sw.lat,
      tr_latitude: bounds.ne.lat,
      bl_longitude: bounds.sw.lng,
      tr_longitude: bounds.ne.lng,
      restaurant_tagcategory_standalone: '10591',
      restaurant_tagcategory: '10591',
      limit: '30',
      currency: 'USD',
      open_now: 'false',
      lunit: 'km',
      lang: 'en_US',
    }

    try {
      const res = await axios.get(
        'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
        {
          headers,
          params,
        }
      )
     
      return res.data.data
    } catch (error) {
      console.log(error)
      thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
