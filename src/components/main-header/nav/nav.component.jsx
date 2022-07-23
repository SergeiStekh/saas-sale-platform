import React from 'react'
import {StyledNavBar} from '../../../styled/elements/navBar/NavBar.styled'
import {StyledNavLink} from '../../../styled/elements/navBar/NavLink.styled'
import Burger from './burger.component'
import useNavBar from '../../../custom-hooks/useNavBar'
import { StyledOverlay } from '../../../styled/elements/navBar/overlay.styled'

export default function Nav({links}) {
  const { isMobileMenuOpen, toggleNavBarMenu } = useNavBar();

  const linksList = links.map((el, idx) => {
    const { to, content } = el;
    return <StyledNavLink key={idx} to={to}>{content}</StyledNavLink>
  })

    return (
        <>
          <Burger 
            isMobileMenuOpen={isMobileMenuOpen} 
            onBurgerClick={toggleNavBarMenu}
          />
          <StyledOverlay isMobileMenuOpen={isMobileMenuOpen}/>
          <StyledNavBar isMobileMenuOpen={isMobileMenuOpen}>
            {linksList}
          </StyledNavBar>
        </>
    )
}
