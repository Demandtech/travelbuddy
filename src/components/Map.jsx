/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
//AIzaSyAzBZBw0jXy4x_Yrt6MU-nNs1gjTInSNLE
import GoogleMapReact from 'google-map-react'
import { useSelector } from 'react-redux'
import Star from './Stars'

const Map = ({ coords, setBounds, setCoords }) => {
  const { restaurants } = useSelector((store) => store.features)
  return (
    <div className='h-[400px] w-full lg:h-full px-5 lg:px-0'>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyAzBZBw0jXy4x_Yrt6MU-nNs1gjTInSNLE',
        }}
        defaultCenter={coords}
        defaultZoom={14}
        center={coords}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
      >
        {restaurants?.map((res, index) => (
          <div
            className='min-w-[150px] bg-white'
            lng={res.longitude}
            lat={res.latitude}
            key={index}
          >
            <div className='text-sm p-2'>
              <span>{res.name}</span>
              <Star rating={res.rating} />
            </div>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
