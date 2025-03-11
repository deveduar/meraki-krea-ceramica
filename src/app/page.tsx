import Hero from "@/components/sections/hero"
import AboutUs from "@/components/sections/about-us"
import Courses from "@/components/sections/courses"
import Location from "@/components/sections/location"
import InstagramSection from "@/components/sections/instagram-section"
import Reviews from "@/components/sections/reviews"
import FAQ from "@/components/sections/faq"
import Contact from "@/components/sections/contact"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <Courses />
      <Location />
      <InstagramSection />
      <Reviews />
      <FAQ />
      <Contact />
      <WhatsAppButton phoneNumber="34665817856" />
    </main>
  )
}