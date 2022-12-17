import Footer from '../components/Landing/Footer'
import Main from '../components/Landing/Main'
import MainMobile from '../components/Landing/MainMobile'
import MintingContent from '../components/Landing/MintingContent/MintingContent'
import Nav from '../components/Nav'



export default function Mint() {
  return (
    <div className=''>
        <Nav/>
        <div className='hidden md:block'>
        <Main>
          <MintingContent/>
          <Footer />
        </Main>
      </div>
      <div className='md:hidden'>
        <MainMobile>
          <MintingContent/>
          <Footer />
        </MainMobile>
      </div>
    </div>
  )
}
