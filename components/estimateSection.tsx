import EstimateForm from './estimateForm';
import EstimateImage from './estimateImage';

export default function EstimateSection() {
    return (
        <div id="estimate" className="flex flex-col max-w-screen-lg md:flex-row justify-between gap-x-4 gap-y-8 mx-auto">
            <EstimateImage />
            <EstimateForm />
        </div>
    )
}
