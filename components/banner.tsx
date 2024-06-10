import Image from 'next/image'
import heroImage from '@/public/temporary_hero3.png'
import Review from './review'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className="relative ml-[-0.5rem] mr-[-0.5rem] sm:ml-[-2rem] sm:mr-[-2rem] max-w-[100dvw] h-96">
            <Image
                src={heroImage}
                alt="Nathan Harms painting"
                quality={100}
                priority
                fill
                placeholder="blur"
                style={{ objectFit: 'cover' }}
            />
            <div
                className="absolute bottom-0 left-0 flex xl:justify-center gap-x-8 px-8 pb-8 overflow-x-auto w-[100dvw]"
                style={{ scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent', scrollbarWidth: 'thin' }}>
                <Review
                    name="Donna Lynne E."
                    review="What a pleasure to walk into our home and see an amazing transformation! Not only a fresh new colour but the brand new looking trim, smooth surfaces where there once were many holes and no mess to clean up. Nathan is a joy to work with and someone we trust. Thank you!"
                />
                <Review
                    name="Sue G."
                    review="Nathan did a tremendous job painting our whole main floor of our home, he was detail oriented, efficient, and on schedule with the timeline for a large project. He is friendly and trustworthy and I would recommend him to anyone."
                />
                <Review
                    name="Lisa Young"
                    review="Nathan drove 40 minutes out of Edmonton to repaint several rooms in our house. He was on time, did a fantastic job, and cleaned up after himself. I would highly recommend calling Nathan and refer him to all of my friends."
                />
            </div>
            <div className='absolute bottom-4 right-8'>
                <Link href="https://www.bbb.org/ca/ab/edmonton/profile/painting-contractors/reliable-painters-0117-100430/customer-reviews" target="_blank">
                    <Button size="large" variant='contained' className='!text-sm !font-bold'>See my BBB page</Button>
                </Link>
            </div>
        </div>
    )
}
