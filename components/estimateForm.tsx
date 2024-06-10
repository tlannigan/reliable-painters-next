'use client'

import { Box, Button, Paper, TextField } from '@mui/material'
import { useState } from 'react'
import bbbImage from '../public/bbb_a_plus_rating.svg'
import Image from 'next/image'

export default function EstimateForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [details, setDetails] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const openEmailTemplate = () => window.location.href = `mailto:nathan@reliable-painters.ca?subject=Customer%20Estimate%20Request&body=Dear%20Nathan%2C%0A%0A${details}${phoneNumber !== '' ? `%0A%0AI%20can%20also%20be%20reached%20at%20${phoneNumber}` : ''}%0A%0ASincerely%2C%0A${firstName}%20${lastName}`

    return (
        <Box component={Paper} className='flex flex-col basis-5/12 justify-between gap-y-8 section !rounded-md !shadow-none'>
            <div className='text-xl roboto-bold'>
                <h3>Request a Free Estimate</h3>
            </div>
            <div className=''>
                <TextField onChange={e => setFirstName(e.target.value.trim())} required fullWidth id='estimate-first-name' label='First name' variant='outlined' placeholder={'John'} />
            </div>
            <div className=''>
                <TextField onChange={e => setLastName(e.target.value.trim())} required fullWidth id='estimate-last-name' label='Last name' variant='outlined' placeholder={'Smith'} />
            </div>
            <div className=''>
                <TextField onChange={e => setPhoneNumber(e.target.value.trim())} fullWidth id='estimate-phone' label='Phone number' variant='outlined' placeholder={'123-456-7890'} />
            </div>
            <div className=''>
                <TextField onChange={e => setDetails(e.target.value.trim())} required fullWidth id='estimate-details' label='Details' variant='outlined' placeholder={'My bathroom needs repainting...'} />
            </div>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <a className='' href='https://www.bbb.org/ca/ab/edmonton/profile/painting-contractors/reliable-painters-0117-100430/customer-reviews'>
                        <Image src={bbbImage} alt='BBB A+ rating' className='svg-filter h-[36px] w-full' />
                    </a>
                </div>
                <div className=''>
                    <Button onClick={openEmailTemplate} size="large" variant='contained' className='!text-sm !font-bold'>REQUEST</Button>
                </div>
            </div>
        </Box>
    )
}