import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { Wrapper } from "./wrapper.styled";
import { StyledNavOverlay } from './nav-overlay.styled'
import { Burger } from '../../components/burger';
import { NavBarComponent } from "./nav-bar.component";
import useMobileMenu from '../../hooks/useMobileMenu'

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isMobileMenuOpen, toggleNavBarMenu } = useMobileMenu();

  return (
    <Wrapper>
      <StyledNavOverlay isMobileMenuOpen={isMobileMenuOpen}/>
      <Burger 
        isMobileMenuOpen={isMobileMenuOpen} 
        onClick={toggleNavBarMenu}
      />
      <NavBarComponent isMobileMenuOpen={isMobileMenuOpen} currentUser={currentUser}/>
    </Wrapper>
  )
}

export { NavBar }