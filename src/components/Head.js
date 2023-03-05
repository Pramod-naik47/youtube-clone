import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
        <img className='h-6' alt='Hamburger Icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png'/>
        <img className='h-6 ml-2' alt="youtube icon" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'/>
      </div>
      <div className='col-span-10 px-10'>
        <input type="text" className='w-1/2 border border-gray-400 p-1 rounded-l-full'/>
        <button className='border border-gray-400 p-1 rounded-r-full bg-gray-100'>Search</button>
      </div>
      <div className='col-span-1 '>
        <img className='h-6' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      </div>
    </div>
  )
}

export default Head