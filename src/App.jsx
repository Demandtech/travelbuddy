import { useEffect, useState } from 'react'
import Aside from './components/Aside'
import Map from './components/Map'
import { getResData } from './redux/Thunks/featureThunk'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [bounds, setBounds] = useState({})
  const [coords, setCoords] = useState({})

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setCoords({ lat: latitude, lng: longitude })
      })
    } else {
      console.error('Geolocation is not available in this browser.')
    }
  }, [])

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      dispatch(getResData(bounds))
    }
  }, [bounds, dispatch])

  return (
    <div className='lg:grid lg:grid-cols-3 min-h-screen'>
      <div className='lg:col-span-1'>
        <Aside />
      </div>
      <div className='lg:col-span-2'>
        <Map setCoords={setCoords} setBounds={setBounds} coords={coords} />
      </div>
    </div>
  )
}

export default App
