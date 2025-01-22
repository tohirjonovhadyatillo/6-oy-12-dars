import React from 'react'
import Header from '../components/Header'

function MainLayout({ children }) {
    return (
        <div className='w-full flex justify-center flex-col items-center'>
            <div className='w-full bg-blue-100'>
                <Header />
            </div>

            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout