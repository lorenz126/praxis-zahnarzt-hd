import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Practice from './pages/Practice'
import Contact from './pages/Contact'
import Prevention from './pages/services/Prevention'
import Fillings from './pages/services/Fillings'
import Prosthodontics from './pages/services/Prosthodontics'
import Endodontics from './pages/services/Endodontics'
import Periodontology from './pages/services/Periodontology'
import Implantology from './pages/services/Implantology'
import Pediatric from './pages/services/Pediatric'
import Aesthetics from './pages/services/Aesthetics'
import Functional from './pages/services/Functional'
import Impressum from './pages/legal/Impressum'
import Datenschutz from './pages/legal/Datenschutz'

// Professional blue-gray mesh background for dental practice
const mesh = [
  "bg-slate-400/[0.20] lg:bg-slate-400/[0.15]",
  "bg-blue-400/[0.20] lg:bg-blue-400/[0.15]",
  "bg-gray-400/[0.20] lg:bg-gray-400/[0.15]",
]

function App() {

  return (
    <div className="min-h-screen relative">
      {/* Ambient mesh background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute w-[90vw] h-[90vw] lg:w-[60vw] lg:h-[60vw] rounded-full ${mesh[0]} blur-[80px] lg:blur-[120px] animate-blob-1 top-[-10%] left-[-10%]`} />
        <div className={`absolute w-[80vw] h-[80vw] lg:w-[50vw] lg:h-[50vw] rounded-full ${mesh[1]} blur-[80px] lg:blur-[120px] animate-blob-2 top-[30%] right-[-15%]`} />
        <div className={`absolute w-[85vw] h-[85vw] lg:w-[55vw] lg:h-[55vw] rounded-full ${mesh[2]} blur-[80px] lg:blur-[120px] animate-blob-3 bottom-[-10%] left-[20%]`} />
      </div>
      <Header />
      {/* Main content offset by sidebar width on desktop */}
      <div className="lg:ml-[219px]">
        {/* Mobile header spacer */}
        <div className="h-16 lg:h-0" />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/prevention" element={<Prevention />} />
            <Route path="/services/fillings" element={<Fillings />} />
            <Route path="/services/prosthodontics" element={<Prosthodontics />} />
            <Route path="/services/endodontics" element={<Endodontics />} />
            <Route path="/services/periodontology" element={<Periodontology />} />
            <Route path="/services/implantology" element={<Implantology />} />
            <Route path="/services/pediatric" element={<Pediatric />} />
            <Route path="/services/aesthetics" element={<Aesthetics />} />
            <Route path="/services/functional" element={<Functional />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
