import Link from 'next/link'

export default function ContactInformation() {
    return (
        <div className='flex flex-col flex-auto section gap-4'>
            <div className='flex gap-x-2'>
                <p className='font-bold basis-1/5'>Phone</p>
                <Link className='text-blue-600 hover:underline' href='tel:780-123-4567'>(780) 123-4567</Link>
            </div>
            <div className='flex gap-x-2'>
                <p className='font-bold basis-1/5'>Email</p>
                <Link className='text-blue-600 hover:underline' href='mailto:nathan@reliable-painters.ca'>
                    nathan@reliable-painters.ca
                </Link>
            </div>
            <div className='flex gap-x-2'>
                <p className='font-bold basis-1/5'>Hours</p>
                <div className='flex gap-x-8'>
                    <div>
                        <p>Weekdays</p>
                        <p>Saturday</p>
                        <p>Sunday</p>
                    </div>
                    <div>
                        <p>7am-6pm</p>
                        <p>10am-5pm</p>
                        <p>Closed</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-2'>
                <p className='font-bold basis-1/5'>Legal</p>
                <Link href="/privacy" className='text-blue-600 hover:underline'>Privacy Policy</Link>
            </div>
        </div>
    )
}