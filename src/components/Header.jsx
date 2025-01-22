import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='container mx-auto w-full flex items-center justify-between p-6 bg-blue-500'>
                <div className='bg-blue-900 py-2 px-4 rounded-md text-white'>C</div>
                <div>
                    <ul className='flex items-center justify-between gap-10 text-white'>
                        <li className='active:bg-slate-900 active:py-2 active:px-3 active:text-white active:rounded-lg hover:bg-white hover:rounded-1 hover:text-black' >
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='active:bg-slate-900 active:py-2 active:px-3 active:text-white active:rounded-lg hover:bg-white hover:rounded-1 hover:text-black'>
                            <Link className='' to='/about'>About</Link>
                        </li>
                        <li className='active:bg-slate-900 active:py-2 active:px-3 active:text-white active:rounded-lg hover:bg-white hover:rounded-1 hover:text-black'>
                            <Link className='' to='/products'>Products</Link>
                        </li>
                        <li className='active:bg-slate-900 active:py-2 active:px-3 active:text-white active:rounded-lg hover:bg-white hover:rounded-1 hover:text-black'>
                            <Link className='' to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-5 text-white'>
                    <div className='hover:bg-white hover:rounded-1 hover:text-black p-3'>Card</div>
                </div>
            </header>
        </>
    )
}

export default Header