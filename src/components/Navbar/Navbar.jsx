import { NavContainer, NavContentLink, NavbarLink, NavbarLinkContainer } from './NavbarStyled'
import logo from '../../assets/Logo_wipay.png'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (

    <>
      <NavContainer>
        <NavbarLinkContainer>
          <NavbarLink to='/'>
            <img src={logo} alt='logo-home' />
          </NavbarLink>
          {isLoggedIn
            ? (
              <NavContentLink>
                <NavbarLink to='/usuarios'>Usuarios</NavbarLink>
                <NavbarLink to='/usuarios'>Nuevo Usuario</NavbarLink>
                <NavbarLink to='/' onClick={handleLogout}>Cerrar Sesión</NavbarLink>

              </NavContentLink>
              )
            : (
              <NavbarLink to='/login'>Inicio Sesión</NavbarLink>
              )}
        </NavbarLinkContainer>

      </NavContainer>
    </>
  )
}

export default Navbar
