import { useEffect, useState } from "react"
import MobileFooter from "./Mobile/MobileFooter"
import DesktopFooter from "./Desktop/DesktopFooter"

const Footer = () => {

  const [ device, setDevice ] = useState(window.innerWidth < 992)

  useEffect(() => {
    const handleSize = () => {
      setDevice(window.innerWidth < 992)
    }

    window.addEventListener('resize', handleSize)

    return () => window.removeEventListener('resize', handleSize)
  })

  return (
    <div className="footer">
      {device ? <MobileFooter /> : <DesktopFooter />}
    </div>
  )
}

export default Footer