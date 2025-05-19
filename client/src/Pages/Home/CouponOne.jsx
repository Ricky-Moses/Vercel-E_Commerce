import React from 'react'

const CouponOne = () => {
  return (
    <div className='row4 w-screen flex flex-col items-center justify-center gap-0'>
      <div className="w-full h-1/6 flex items-center justify-center">
        <h1 className="font-extrabold">⚡Coupon: Fiery Flash Deal ⚡</h1>
      </div>
      <div className="w-full h-5/6 flex items-center justify-center gap-5">
        <div className="skeleton w-2/5 h-5/6"></div>
        <div className="skeleton w-2/5 h-5/6"></div>
      </div>
    </div>
  )
}

export default CouponOne