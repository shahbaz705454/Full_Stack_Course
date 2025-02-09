import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' bg-gray-800 text-white flex flex-row justify-between h-16 px-10 items-center'>
        <div>NEXT Js First App</div>
        <div>
            <li className='flex gap-4'>
                <ul>
                <Link href="/">Home</Link>
                </ul>
                <ul><Link href="/about">About</Link></ul>
                <ul><Link href="/contact">Contact</Link></ul>
                
            </li>
        </div>
    </div>
  )
}

export default Navbar