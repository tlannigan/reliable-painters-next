import Banner from '@/components/banner'
import ContactSection from '@/components/contactSection'
import DividingHeader from '@/components/dividingHeader'
import EstimateSection from '@/components/estimateSection'
import Footer from '@/components/footer'
import Header from '@/components/header'
import MottoSection from '@/components/mottoSection'

export default function Home() {
    return (
        <div className="mx-auto px-2 sm:px-8 pt-4 sm:pt-8 overflow-x-hidden">
            <Header />

            <Banner />

            <DividingHeader
                id="about"
                before={"Hi, I'm "}
                underlined={'Nathan'}
                after={', a master painter with over 50 years of experience'}
            />

            <MottoSection />
            
            <EstimateSection />

            <DividingHeader before={''} underlined={'Contact'} after={' me'} />

            <ContactSection />
            
            <Footer />
        </div>
    )
}
