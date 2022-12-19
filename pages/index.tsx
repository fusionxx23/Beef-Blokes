import Footer from '../components/Landing/Footer'
import LandingContent from '../components/Landing/LandingContent'
import Main from '../components/Landing/Main'
import MainMobile from '../components/Landing/MainMobile'
import Nav from '../components/Nav'



export default function Home() {
  
  return (
    <div className=''>
      <Nav/>
      <div className='hidden md:block'>
        <Main>
          <LandingContent />
        </Main>
      </div>
      <div className=' md:hidden'>
        <MainMobile>
          <LandingContent />
          <Footer />
        </MainMobile>
      </div>

    </div>
  )
}
