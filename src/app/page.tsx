import Galery from '@/components/Galery'
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
      <Galery />
    </div>
  )
}
