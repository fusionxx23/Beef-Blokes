import FaqsContent from '../components/Info/FaqsContent'
import Info from '../components/Info/Info'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className=''>
      <Navbar bg={true} />
      <Info height={'1500px'}>
        <FaqsContent />
      </Info>
    </div>
  )
}
