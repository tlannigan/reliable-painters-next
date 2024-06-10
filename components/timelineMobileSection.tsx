'use client'

import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useState } from 'react'

const stories = [
    {
        year: "1972",
        story: `I started my career as a house painter on August 4, 1972 under the employ of a German master painter, Hermann Brummer. I was 18 years of age.
            Hermann was an independent painting contractor in the city of Penticton, British Columbia.
            For five years, Hermann and his son, Gerry, gave me an apprenticeship in the painting trade. It was an extensive and diverse experience for which I have always been grateful.`
    },
    {
        year: "1977",
        story: `I had a solid set of painting skills and decided to move to Edmonton, Alberta where I had family.
            I registered the name, "Reliable Painter," in Edmonton on November 25, 1977 and began finding clients and building a reputation for dependability and quality workmanship.
            When I found clients I made certain that they were always completely satisfied.`
    },
    {
        year: "1988",
        story: `I took on my first full time painter, so I changed the name of my company to "Reliable Painters," which it has remained to this day.
            Although I have had wonderful people in my employ over the years, it's been my choice—in the past 20 years—to work alone.`
    },
    {
        year: "2024",
        story: `The 50+ years since I first picked up a paint brush have flown by.
            Reliable Painters is a name that is trusted by home owners in Edmonton and the surrounding area.
            In over 50 years of continuous business, there has never been a complaint to the Better Business Bureau in regards to my services.`
    },
]

export default function TimelineMobileSection() {
    const [index, setIndex] = useState(0)

    const nextStory = () => {
        if (index === 3) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const previousStory = () => {
        if (index === 0) {
            setIndex(3)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className='!block md:!hidden section'>
            <div className='flex justify-between mb-3'>
                <button className='rounded-md hover:bg-gray-200 p-2' onClick={previousStory}><ChevronLeft sx={{ fontSize: 64 }} /></button>
                <div className='flex flex-col justify-center'>
                    <p className='text-[2rem]'>{stories[index].year}</p>
                </div>
                <button className='rounded-md hover:bg-gray-200 p-2' onClick={nextStory}><ChevronRight sx={{ fontSize: 64 }} /></button>
            </div>
            <article className='text-lg px-4 pb-4 leading-[31px]'>
                {stories[index].story}
            </article>
        </div>
    )
}