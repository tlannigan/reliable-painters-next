'use client'

import Link from 'next/link'
import Navbar from './navbar'

export default function Header() {
    const setNoTarget = () => window.location.hash = ""
    return (
        <div className="flex justify-between mb-4 sm:mb-8">
            <div>
                <h1 className='rowdies text-base sm:text-3xl decoration-4 underline-offset-4 hover:underline'><Link href="/" onClick={setNoTarget}>RELIABLE PAINTERS</Link></h1>
            </div>
            <Navbar />
        </div>
    )
}
