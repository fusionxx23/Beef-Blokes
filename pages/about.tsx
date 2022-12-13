import TeamContent from '../components/Info/TeamContent'
import Info from '../components/Info/Info'
import Navbar from '../components/Navbar'


export default function About() {
  return (
    <div className=''>
        <Navbar bg={true}/>
        <Info>
          <TeamContent/>
        </Info>
    </div>
  )
}
