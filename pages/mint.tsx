import Footer from '../components/Footer'
import Main from '../components/Main'
import MintingContent from '../components/MintingContent'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className=''>
        <Navbar/>
        <Main>
          <MintingContent/>
          <Footer/>
        </Main>
    </div>
  )
}
