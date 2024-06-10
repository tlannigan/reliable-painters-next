import Image from 'next/image'
import estimateImage from '../public/paint-chips.jpg'
import { Box } from '@mui/material'

export default function EstimateImage() {
    return (
        <Box className="md:basis-7/12 rounded-md">
            <Image src={estimateImage} alt="Paint chips" className="rounded-md object-cover md:h-full" />
        </Box>
    )
}
