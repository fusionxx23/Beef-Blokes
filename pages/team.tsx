import Info from '../components/Info/Info'
import TeamContent from '../components/Info/TeamContent'

import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className=''>
      <Navbar bg={true} />
      <Info height={'920px'}>
        <TeamContent />
      </Info>
    </div>

  )
}
