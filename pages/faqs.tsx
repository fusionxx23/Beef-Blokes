import FaqsContent from '../components/Info/FaqsContent'
import Info from '../components/Info/Info'
import Nav from '../components/Nav'


export default function Home() {
  return (
    <div className=''>
      <Nav/>
      <Info height={'1519px'}>
        <FaqsContent />
      </Info>
    </div>
  )
}
