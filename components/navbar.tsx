'use client'

import Link from 'next/link';

export default function Navbar() {
    const setNoTarget = () => window.location.hash = ""
    const setContactTarget = () => window.location.hash = "contact"

    return (
        <nav className="flex items-center gap-4 sm:gap-x-8 roboto-bold decoration-4 underline-offset-4">
            <Link href="/about" onClick={setNoTarget} className="hover:underline text-xs sm:text-base">
                ABOUT
            </Link>
            <Link href="/#contact" onClick={setContactTarget} className="hover:underline text-xs sm:text-base">
                CONTACT
            </Link>
        </nav>
    )
}
