import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ShowcaseCarousel from './components/ShowcaseCarousel'
import Experience from './components/Experience'
import PromoBanner from './components/PromoBanner'
import PortfolioGrid from './components/PortfolioGrid'
import BlogGrid from './components/BlogGrid'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#f5f5f7] text-[#111111] font-sans antialiased selection:bg-black selection:text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ShowcaseCarousel />
        <Experience />
        <PromoBanner />
        <PortfolioGrid />
        <BlogGrid />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App