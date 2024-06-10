import ContactInfo from './contactInfo';
import ContactMap from './contactMap';

export default function ContactSection() {
    return (
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-x-4 gap-y-8 mb-16">
            <ContactInfo />
            <ContactMap />
        </div>
    )
}
