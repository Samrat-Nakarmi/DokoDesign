import Image from 'next/image'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Courses } from './components/Courses'
import { Clubs } from './components/Clubs'


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
    </main>
  )
}
