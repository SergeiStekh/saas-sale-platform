import React, { useEffect, useState } from 'react'
import {StyledNav} from '../../../styled/elements/navBar/Nav.styled'
import NavLink from '../nav/nav-link.component'
import {Cart4 as CartIcon} from '@styled-icons/bootstrap'
import Burger from './burger.component'
import { useScrollBlock } from '../../../custom-hooks/useBodyScrollBlock';
import { useWindowSize } from '../../../custom-hooks/useWindowSize';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [blockScroll, allowScroll] = useScrollBlock();
  const windowSize = useWindowSize();

  const onBurgerClickHandler = () => {
    setIsNavOpen((prevState) => {
      return !prevState;
    });
  }

  useEffect(() => {
    if (isNavOpen) {
      blockScroll();
    } else {
      allowScroll();
    };
  }, [allowScroll, blockScroll, isNavOpen]);

  useEffect(() => {
    if (windowSize[0] <= 768) {
      setIsNavOpen(false);
    }
  }, [windowSize]);

    return (
        <>
        <Burger 
          isNavOpen={isNavOpen} 
          onBurgerClick={onBurgerClickHandler}
        />
        <StyledNav 
          isNavOpen={isNavOpen}
        >
          <NavLink>Shop</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Sign in</NavLink>
          <NavLink>
            <CartIcon/>
          </NavLink>
        </StyledNav>
        </>
    )
}
