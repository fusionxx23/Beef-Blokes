import Info from '../components/Info/Info'
import Navbar from '../components/Navbar'
import AboutContent from '../components/Info/AboutContent'


export default function About() {
  return (
    <div className=''>
        <Navbar bg={true}/>
        <Info height={'1520px'}>
          <AboutContent></AboutContent>
        </Info>
    </div>
  )
}
