import AboutContent from '../components/Info/AboutContent'
import Info from '../components/Info/Info'
import Navbar from '../components/Navbar'


export default function About() {
  return (
    <div className=''>
        <Navbar bg={true}/>
        <Info>
          <AboutContent/>
        </Info>
    </div>
  )
}
