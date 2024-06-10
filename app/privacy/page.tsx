import Header from '@/components/header'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-screen-lg mx-auto md:p-8 p-4">
            <Header />
            <div className='bg-white rounded-md p-8'>
                <h2 className="font-bold text-2xl text-center mb-4">Privacy Policy</h2>
                <p className='w-2/3 mx-auto text-lg mb-4'>
                    At Reliable Painters, our privacy policy is really simple: we don&apos;t collect or store ANY of your personal information or data.
                    Under no circumstance will we sell or redistribute any information about our clients. What happens on your computer stays on your computer.
                </p>
                <Link href="/" className='block text-lg text-center text-blue-600 hover:underline'>Return to the home page</Link>
            </div>
        </div>
    )
}
