import Footer from '../components/Landing/Footer'
import Main from '../components/Landing/Main'
import MintingContent from '../components/Landing/MintingContent/MintingContent'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className=''>
        <Navbar bg={false}/>
        <Main>
          <MintingContent/>
          <Footer/>
        </Main>
    </div>
  )
}
