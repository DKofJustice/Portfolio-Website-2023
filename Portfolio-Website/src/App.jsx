import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'

function App() {
  return (
    <div className='w-screen h-full bg-black text-white'>
      <Header/>
      <>
        <Hero/>
        <Work/>
        <About/>
        <Services/>
        <Footer/>
      </>
    </div>
  )
}

export default App
