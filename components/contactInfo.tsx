import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import Link from 'next/link'

export default function ContactInfo() {
    return (
        <div id="contact" className="basis-1/2 rounded-md target:!outline target:!outline-blue-500 target:!outline-4">
            <TableContainer component={Paper} className='!rounded-md !shadow-none'>
                <Table aria-label="contact info">
                    <TableBody>
                        <TableRow key={0}>
                            <TableCell component="th" className="!font-bold">
                                Phone
                            </TableCell>
                            <TableCell>
                                <Link className="text-blue-600 hover:underline" href="tel:780-123-4567">
                                    (780) 123-4567
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow key={1}>
                            <TableCell component="th" className="!font-bold">
                                Email
                            </TableCell>
                            <TableCell>
                                <Link
                                    className="text-blue-600 hover:underline"
                                    href="mailto:nathan@reliable-painters.ca"
                                    target='_blank'>
                                    nathan@reliable-painters.ca
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow key={2}>
                            <TableCell component="th" className="!font-bold">
                                Hours
                            </TableCell>
                            <TableCell>Weekdays: 7am-6pm</TableCell>
                        </TableRow>
                        <TableRow key={3}>
                            <TableCell component="th"></TableCell>
                            <TableCell>Saturday: 10am-5pm</TableCell>
                        </TableRow>
                        <TableRow key={4}>
                            <TableCell component="th"></TableCell>
                            <TableCell>Sunday: Closed</TableCell>
                        </TableRow>
                        <TableRow key={5} className=''>
                            <TableCell component="th" className="!font-bold !border-none">
                                Legal
                            </TableCell>
                            <TableCell className='!border-none'>
                                <Link href="/privacy" className="text-blue-600 hover:underline">
                                    Privacy Policy
                                </Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
