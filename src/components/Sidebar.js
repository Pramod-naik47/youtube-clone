import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul className='pt-4'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr/>
      <ul className='pt-4'>
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
        <li>History</li>
      </ul>
      <hr/>
      <h1 className='font-bold pt-4'>Subscriptions</h1>
      <ul className='pt-4'>
        <li>Tomorrowland</li>
        <li>Programming with mosh</li>
      </ul>
    </div>
  )
}

export default Sidebar