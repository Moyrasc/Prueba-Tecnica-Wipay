import { NavContainer, NavbarLink, NavbarLinkContainer } from './NavbarStyled'
import logo from '../../assets/Logo_wipay.png'

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <NavbarLinkContainer>
          <NavbarLink to='/'>
            <img src={logo} alt='logo-home' />
          </NavbarLink>
          <NavbarLink to='/login'>Inicio Sesión</NavbarLink>
        </NavbarLinkContainer>

      </NavContainer>
    </>
  )
}

export default Navbar
