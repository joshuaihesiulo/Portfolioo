import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ShowcaseCarousel from './components/ShowcaseCarousel'
import PromoBanner from './components/PromoBanner'
import PortfolioGrid from './components/PortfolioGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#f5f5f7] text-[#111111] font-sans antialiased selection:bg-black selection:text-white min-h-screen">
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ShowcaseCarousel />
        <PromoBanner />
        <PortfolioGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
