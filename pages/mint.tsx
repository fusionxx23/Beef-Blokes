import Footer from '../components/Landing/Footer'
import Main from '../components/Landing/Main'
import MintingContent from '../components/Landing/MintingContent/MintingContent'
import Nav from '../components/Nav'



export default function Home() {
  return (
    <div className=''>
        <Nav/>
        <Main>
          <MintingContent/>
          <Footer/>
        </Main>
    </div>
  )
}
