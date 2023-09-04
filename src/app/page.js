import Image from 'next/image'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Courses } from './components/Courses'
import { Clubs } from './components/Clubs'
import { Footer } from './components/Footer'


export default function Home() {
  return (
    <main>
      <header>
        <Navbar/>
      </header>
      <Hero/>
      <About/>
      <Courses/>
      <Clubs/>
      <footer>
        <Footer/>
      </footer>
    </main>
    
  )
}
