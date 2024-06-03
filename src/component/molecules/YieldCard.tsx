import React from 'react'
import graph from '../../assets/Vector 2929.svg'

const YieldCard = () => {
  return (
    <div className='bg-white rounded-lg my-8 pt-2 px-4 flex flex-row gap-10'>
        <div>
            <p>Yield earned this month</p>
            <p className='font-bold pt-1'>₦3,500.78</p>
            </div>
            <img src={graph} alt='graph' />
    </div>
  )
}

export default YieldCard