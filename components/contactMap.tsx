export default function ContactMap() {
    return (
        <div className="basis-1/2">
            <iframe
                className="border-0 w-full h-full section-border"
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148.44094743256207!2d-113.44391852588063!3d53.46747429844177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01923fdce3959%3A0x588add37e3a63fe7!2s121%20NW%20Morin%20Maze%2C%20Edmonton%2C%20AB%20T6K%201V1!5e0!3m2!1sen!2sca!4v1703127678691!5m2!1sen!2sca"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
