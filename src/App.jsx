import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <Main/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
