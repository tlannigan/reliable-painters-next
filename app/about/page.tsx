import DividingHeader from '@/components/dividingHeader';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ReviewHeadshot from '@/components/reviewHeadshot';
import TimelineSection from '@/components/timelineSection';

export default function AboutMePage() {
    return (
        <div className="mx-auto px-2 sm:px-8 pt-8 overflow-x-hidden">
            <Header />

            <DividingHeader id="estimate" before={'I believe in '} underlined={'courtesy, integrity, and trust'} after={''} />

            <ReviewHeadshot />

            <TimelineSection />

            <Footer />
        </div>
    )
}