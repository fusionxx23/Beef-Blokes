import Info from '../components/Info/Info'
import Navbar from '../components/Navbar'
import AboutContent from '../components/Info/AboutContent'
import Mobile from '../components/Info/Mobile'


export default function About() {
  return (
    <div className=''>
      <Navbar bg={true} />
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
