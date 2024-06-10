import { Roboto, Rowdies } from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-roboto'
})

export const rowdies = Rowdies({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-rowdies'
})