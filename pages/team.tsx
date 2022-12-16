import Info from "../components/Info/Info";
import TeamContent from "../components/Info/TeamContent";

import Navbar from "../components/Navbar";

export default function Team() {
  return (
    <div className="">
      <Navbar bg={true} />
      <div className='hidden sm:block'>
        <Info height={"920px"}>
          <TeamContent />
        </Info>
      </div>
      <div className='sm:hidden'>
        <Info height={"1691px"}>
          <TeamContent />
        </Info>
      </div>
    </div>
  );
}
