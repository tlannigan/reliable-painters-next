import TimelineDates from './timelineDates';
import TimelineMobileSection from './timelineMobileSection';

export default function TimelineSection() {
    return (
        <div className='max-w-screen-lg mx-auto mb-16'>
            <TimelineDates />
            <TimelineMobileSection />
        </div>
    )
}