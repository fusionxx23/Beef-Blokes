import Info from '../components/Info/Info'
import Navbar from '../components/Navbar'
import AboutContent from '../components/Info/AboutContent'
import Mobile from '../components/Info/Mobile'
import Nav from '../components/Nav'


export default function About() {
  return (
    <div className=''>
      <Nav/>
      <div className="hidden sm:block">
        <Info height={'1520px'}>
          <AboutContent></AboutContent>
        </Info>
      </div>

      <Mobile>
        <AboutContent></AboutContent>
      </Mobile>
    </div>
  )
}
