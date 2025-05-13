import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Location from './components/Location'
import Footer from './components/Footer'
import Popup from './components/Popup'
import StoryVideoGallery from './components/StoryVideoGallery'
import BorsaComponent from './components/BorsaComponent'
import PreciousMetalsComponent from './components/PreciousMetalsComponent'
import GoldConverterComponent from './components/GoldConverterComponent'
import MobileApplicationBanner from './components/MobileApplicationBanner'
import Communication from './components/Communication'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="page-background"></div> {/* Header'dan sonra ve Hero'dan önce */}
      <StoryVideoGallery/>
      <Hero />
      
      <Gallery />
      <About />
      <Location />
      <MobileApplicationBanner/>
      <BorsaComponent/>
      <PreciousMetalsComponent/>
      <GoldConverterComponent/>
      <Communication/>
      <Footer />
      <Popup />
    </div>
  )
}

export default App
