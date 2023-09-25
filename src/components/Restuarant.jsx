import PropTypes from 'prop-types'
import Star from './Stars'
import { FaPhoneAlt, FaEnvelope, FaAddressCard } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const Restuarant = ({
  name,
  photo,
  rating,
  ranking,
  phone,
  email,
  website,
  address,
  num_reviews,
}) => {
  return (
    <div className=' shadow-lg p-4'>
      <div className='mb-3'>
        <img
          width='100%'
          height='100%'
          className='h-[240px] w-ful object-cover'
          src={photo?.images?.medium?.url}
          alt=''
        />
      </div>
      <div className='w-full'>
        <strong>{name}</strong>
        <div>
          <p className='text-sm text-[gray] mb-1'>{ranking}</p>
        </div>
        <div className='flex justify-between '>
          <span>
            <Star rating={rating} />
          </span>
          <span className='text-sm'>{num_reviews} Reviews</span>
        </div>
        <div className='mt-3 flex flex-col gap-1 text-sm'>
          {phone && (
            <p className='flex items-center gap-1'>
              <span className='w-[20px]'>
                <FaPhoneAlt size={15} color='lightgray' />
              </span>
              <span>{phone}</span>
            </p>
          )}
          {email && (
            <p className='flex items-center gap-1'>
              <span className='w-[20px]'>
                <FaEnvelope size={15} color='lightgray' />
              </span>
              <span>{email}</span>
            </p>
          )}
          {website && (
            <p className='flex items-center gap-1'>
              <span className='w-[20px]'>
                <TbWorldWww size={15} color='lightgray' />
              </span>
              <span>{website}</span>
            </p>
          )}
          {address && (
            <p className='flex items-start gap-1'>
              <span className='w-[20px]'>
                <FaAddressCard size={15} color='lightgray' />
              </span>
              <span>{address}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

Restuarant.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.object,
  rating: PropTypes.string,
  open_now_text: PropTypes.string,
  ranking: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  address: PropTypes.string,
  num_reviews: PropTypes.string,
}

export default Restuarant
