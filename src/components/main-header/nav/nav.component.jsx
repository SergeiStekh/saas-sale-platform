import PropTypes from "prop-types"
import React from 'react'
import {StyledNavBar} from '../../../styled/elements/navBar/NavBar.styled'
import {StyledNavLink} from '../../../styled/elements/navBar/NavLink.styled'
import Burger from './burger.component'
import useMobileMenu from '../../../custom-hooks/useMobileMenu'
import { StyledOverlay } from '../../../styled/elements/navBar/overlay.styled'

export default function Nav({links}) {
  const { isMobileMenuOpen, toggleNavBarMenu } = useMobileMenu();

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

Nav.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    to: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
  })).isRequired
}
