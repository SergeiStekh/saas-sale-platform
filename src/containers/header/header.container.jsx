import { Wrapper } from './wrapper.styled'
import { Outlet } from 'react-router-dom'
import { StyledHeader } from './header.styled'
import { Logo } from '../../components/logo'
import { logoImage } from '../../styles/icons/icons'
import { NavBar } from '../nav-bar'

function HeaderContainer() {
  return (
    <>
      <Wrapper>
        <StyledHeader>
          <Logo image={logoImage}/>
          <NavBar/>
        </StyledHeader>
      </Wrapper>
      <Outlet/>
    </>
  )
}

export { HeaderContainer }