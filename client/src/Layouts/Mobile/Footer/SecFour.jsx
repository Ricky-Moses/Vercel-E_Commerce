import { useContext, useMemo } from "react"
import { MenuContext } from "../../../Hooks/useContext"

const SecFour = () => {
  const { data } = useContext(MenuContext)
  const footerData = useMemo(() => data[2]?.footer[0] || [], [data])
  // console.log(footerData.topLinks);

  return (
    <div className="sec-4 flex flex-col items-center justify-center !p-1">
      <div className=" md:w-5/6 text-gray-400">
        <div className="text-start font-bold ">Popular Links</div>
        <div className=" flex flex-wrap gap-x-2">
          {footerData?.topLinks?.map((items, idx) => (
            <div key={idx} className="">
              <div className="">{items.name},</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecFour