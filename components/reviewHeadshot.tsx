import Image from 'next/image'
import headshot from '../public/nathan_harms.jpg'
import bbbImage from '@/public/bbb_a_plus_rating.svg'
import { Button } from '@mui/material'

export default function ReviewHeadshot() {
    return (
        <div className="w-full max-w-screen-lg mx-auto mb-16">
            <Image 
                src={headshot}
                priority
                placeholder="blur"
                alt="Nathan Harms"
                className="rounded-md mx-auto h-[32rem]"
                style={{ objectFit: "contain" }} />
        </div>
    )
}
