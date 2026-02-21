import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import SignupForm from '@/components/SignupForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SignupForm />
      <Footer />
    </main>
  )
}
