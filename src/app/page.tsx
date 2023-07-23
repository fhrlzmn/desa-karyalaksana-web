import Footer from '@/components/Footer'
import History from '@/components/History'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Information from '@/components/Information'
import Profile from '@/components/Profile'

export default function Home() {
  return (
    <div>
      <Hero />
      <Header />
      <Profile />
      <Information />
      <History />
      <Footer />
    </div>
  )
}
