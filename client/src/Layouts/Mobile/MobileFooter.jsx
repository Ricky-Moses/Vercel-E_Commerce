import SecFour from './Footer/SecFour'
import SecOne from './Footer/SecOne'
import SecThree from './Footer/SecThree'
import SecTwo from './Footer/SecTwo'

const MobileFooter = () => {
  return (
    <div className='mobile-footer !py-15'>
        <SecOne />
        <SecTwo />
        <SecThree />
        <SecFour />
    </div>
  )
}

export default MobileFooter