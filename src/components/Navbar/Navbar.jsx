import { BtnLink, BtnLogin, NavContainer, NavContentLink, NavbarLink, NavbarLinkContainer } from './NavbarStyled'
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
                <NavbarLink to='/inicio'>Inicio</NavbarLink>
                <NavbarLink to='/usuarios'>Usuarios</NavbarLink>
                <NavbarLink to='/newuser'>Nuevo Usuario</NavbarLink>
                <NavbarLink to='/' onClick={handleLogout}><BtnLink>Cerrar Sesión</BtnLink></NavbarLink>

              </NavContentLink>
              )
            : (
              <NavbarLink to='/login'><BtnLogin>Inicio Sesión</BtnLogin></NavbarLink>
              )}
        </NavbarLinkContainer>

      </NavContainer>
    </>
  )
}

export default Navbar
