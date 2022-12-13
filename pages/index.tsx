import Footer from '../components/Footer'
import LandingContent from '../components/LandingContent'
import Main from '../components/Main'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className=''>
        <Navbar/>
        <Main>
          <LandingContent/>
          <Footer/>
        </Main>
    </div>
  )
}
