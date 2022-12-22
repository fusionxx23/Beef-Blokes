import FaqsContent from '../components/Info/FaqsContent'
import Info from '../components/Info/Info'
import Mobile from '../components/Info/Mobile'
import Nav from '../components/Nav'


export default function Faqs() {
  return (
    <div className=''>
      <Nav/>
      <div className='hidden sm:block'>
        <Info height={"1000px"}>
          <FaqsContent></FaqsContent>
        </Info>
      </div>
      <Mobile>
        <FaqsContent></FaqsContent>
      </Mobile>
    </div>
  )
}
