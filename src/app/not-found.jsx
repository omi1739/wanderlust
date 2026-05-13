import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div>
      <h1 className='text-4xl text-center font-bold'>This page is not found</h1>
      <h2 className='text-3xl text-red-600 text-center mb-3 mt-4'>Error 404</h2>
     <div className='flex justify-center items-center'>
      
     <Link href={'/'} className='bg-black text-white w-[150px] text-center  p-2 cursor-pointer rounded'> Back to home </Link>
      </div> 
    </div>
  )
}

export default NotFoundPage
