/* eslint-disable react/prop-types */
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Star = ({ rating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span className='text-[12px]' key={index}>
        {rating > number ? (
          <BsStarFill />
        ) : rating > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return <div className='flex text-[#FF9529]'>{tempStars}</div>
}

export default Star
