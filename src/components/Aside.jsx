import RestaurantList from './RestaurantList'

const Aside = () => {
  return (
    <aside>
      <header className='bg-black text-white flex justify-between p-5 items-center'>
        <div className='logo'>
          <strong>Travel Buddy</strong>{' '}
        </div>
        <form>
          <div>
            <input
              className='text-[16px] text-black py-2 pl-4 rounded-sm'
              type='search'
              name='location'
              id='location'
              placeholder='Search Location'
            />
          </div>
        </form>
      </header>
      <section>
        <RestaurantList />
      </section>
    </aside>
  )
}

export default Aside
