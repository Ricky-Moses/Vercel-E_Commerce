
import SecOne from "./Footer/SecOne";
import SecTwo from "./Footer/SecTwo"; 
import SecThree from "./Footer/SecThree";
import SecFour from "./Footer/SecFour";
import SecFive from "./Footer/SecFive";

const DesktopFooter = () => {
  return (
    <div className='desktop-footer !py-15'>
        <SecOne />
        <SecTwo />
        <SecThree />
        <SecFour />
        <SecFive />
    </div>
  )
}

export default DesktopFooter