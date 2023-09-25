import { useSelector } from 'react-redux'
import Restuarant from './Restuarant'
import { Oval } from 'react-loader-spinner'

const RestaurantList = () => {
  const { restaurants, isLoading } = useSelector((store) => store.features)

  return (
    <div className='p-5 flex flex-col gap-5 h-[400px] lg:h-[600px] overflow-auto'>
      <p>Restaurants, Hotels, Attractions near you</p>
      {isLoading ? (
        <Oval
          height={40}
          width={40}
          color='#3d3d3d'
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
          wrapperClass=''
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor='#3d3d3d'
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        restaurants?.map((res, index) => <Restuarant {...res} key={index} />)
      )}
    </div>
  )
}

export default RestaurantList
