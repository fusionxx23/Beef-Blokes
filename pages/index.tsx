import Footer from '../components/Landing/Footer'
import LandingContent from '../components/Landing/LandingContent'
import Main from '../components/Landing/Main'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className=''>
        <Navbar bg={false}/>
        <Main>
          <LandingContent/>
          <Footer/>
        </Main>
    </div>
  )
}
