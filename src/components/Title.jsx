import React from 'react'

function Title({score}) {
  return (
    <div className='w-full flex justify-center h-[30vh] items-center'
    >
      <div className='border-2 border-[#606e85] rounded-xl w-3/4 p-4 px-6 flex justify-between items-center'>
        <div className='text-white text-3xl'>

        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
        </div>

      <div className='bg-white rounded-lg text-[#2a46c0] text-xl p-2 h-24 w-24 flex text-center flex-col justify-between'>
        <p>Score</p>
        <p className='text-[50px] mb-4'>{score}</p>
      </div>
      </div>
      
      </div>
  )
}

export default Title