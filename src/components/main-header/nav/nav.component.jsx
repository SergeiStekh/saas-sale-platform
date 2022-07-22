import React from 'react'
import {StyledNavBar} from '../../../styled/elements/navBar/NavBar.styled'
import {StyledNavLink} from '../../../styled/elements/navBar/NavLink.styled'
import Burger from './burger.component'
import useNavBar from '../../../custom-hooks/useNavBar'

export default function Nav({links}) {
  const { isNavOpen, toggleNavBar } = useNavBar();

  const linksList = links.map((el, idx) => {
    const { to, content } = el;
    return <StyledNavLink key={idx} to={to}>{content}</StyledNavLink>
  })

    return (
        <>
        <Burger 
          isNavOpen={isNavOpen} 
          onBurgerClick={toggleNavBar}
        />
        <StyledNavBar isNavOpen={isNavOpen}>
          {linksList}
        </StyledNavBar>
        </>
    )
}
