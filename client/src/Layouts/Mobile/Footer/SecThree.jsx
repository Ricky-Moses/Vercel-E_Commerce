import { MdFace2 } from "react-icons/md";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const SecThree = () => {
  return (
    <div className="sec-3 w-full grid text-white text-[12px] xs:text-[16px] sm:text-[20px]">
      <div className="border flex items-center justify-center gap-2">
        <MdFace2 />
        <div className="font-bold">HELP CENTER</div>
      </div>
      <div className=" flex items-center justify-center gap-2">
        <FaRegFaceSmileBeam />
        <div className="font-bold"> 2025 RYKAA E-RETAIL LIMITED All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default SecThree