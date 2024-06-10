import ReviewHeadshot from './reviewHeadshot';
import Reviews from './reviews';

export default function ReviewSection() {
    return (
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-8">
            <Reviews />
            <ReviewHeadshot />
        </div>
    )
}
