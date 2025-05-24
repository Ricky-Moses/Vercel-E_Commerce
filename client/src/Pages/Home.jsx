import HeadAd from "./Home/HeadAd"
import SecondPanel from "./Home/SecondPanel"
import ThirdPanel from "./Home/ThirdPanel"
import FourthPanel from "./Home/FourthPanel"
import FifthPanel from "./Home/FifthPanel"
import SixthPanel from "./Home/SixthPanel"
import SeventhPanel from "./Home/SeventhPanel"
import EightPanel from "./Home/EightPanel"
import NinthTenthPanel from "./Home/Ninth&TenthPanel"
import Eleventh from "./Home/Eleventh"

const Home = () => {
  return (
    <div className="home">
      <div className="">
        <HeadAd />
      </div>
      <div className="">
        <SecondPanel />
      </div>
      <div className="">
        <ThirdPanel />
      </div>
      <div className="">
        <FourthPanel />
      </div>
      <div className="">
        <FifthPanel />
      </div>
      <div className="">
        <SixthPanel />
      </div>
      <div className="">
        <SeventhPanel />
      </div>
      <div className="">
        <EightPanel />
      </div>
      <div className="">
        <NinthTenthPanel />
      </div>
      <div className="">
        <Eleventh />
      </div>
    </div>
  )
}

export default Home