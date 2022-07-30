import React, { useContext } from 'react'
import { signOutUser } from '../../../utils/firebase.utils'
import { UserContext } from '../../../contexts/user.context'
import { StyledNavBar } from '../../../styled/elements/navBar/nav-bar.styled'
import { StyledNavLink } from '../../../styled/elements/navBar/nav-link.styled'
import Burger from './burger.component'
import useMobileMenu from '../../../custom-hooks/useMobileMenu'
import { StyledOverlay } from '../../../styled/elements/navBar/overlay.styled'
import { Cart4 as CartIcon } from '@styled-icons/bootstrap'

export default function Nav() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isMobileMenuOpen, toggleNavBarMenu } = useMobileMenu();

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

    return (
        <>
          <Burger 
            isMobileMenuOpen={isMobileMenuOpen} 
            onBurgerClick={toggleNavBarMenu}
          />
          <StyledOverlay isMobileMenuOpen={isMobileMenuOpen}/>
          <StyledNavBar isMobileMenuOpen={isMobileMenuOpen}>
            <StyledNavLink to={'/shop'}>Shop</StyledNavLink>
            <StyledNavLink to={'/contact'}>Contact</StyledNavLink>
            {!currentUser ? 
              <StyledNavLink to={'/login'}>Sign in</StyledNavLink> : 
              <StyledNavLink to={'/'} onClick={signOutHandler}>Sign out</StyledNavLink>
            }
            {!currentUser ? 
              <StyledNavLink to={'/register'}>Sign up</StyledNavLink> : 
              null
            }
            <StyledNavLink to={'/cart'}><CartIcon/></StyledNavLink>
          </StyledNavBar>
        </>
    )
}
