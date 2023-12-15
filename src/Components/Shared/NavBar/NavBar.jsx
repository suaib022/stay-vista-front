import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import Container from '../Container'
import MenuDropdown from './MenuDropDown'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <img src={logo} className='' alt='logo' width='100' height='100' />
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </ Container>
      </div>
    </div>
  )
}

export default Navbar