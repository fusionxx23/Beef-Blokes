import Footer from '../components/Landing/Footer'
import LandingContent from '../components/Landing/LandingContent'
import Main from '../components/Landing/Main'
import MainMobile from '../components/Landing/MainMobile'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


export default function Home() {
  return (
    <div className=''>
      <Navbar bg={false} />
      <Sidebar active={false} />
      <div className='hidden sm:block'>
        <Main>
          <LandingContent />
          <Footer />
        </Main>
      </div>
      <div className=' sm:hidden'>
        <MainMobile>
          <LandingContent />
          <Footer />
        </MainMobile>
      </div>

    </div>
  )
}
