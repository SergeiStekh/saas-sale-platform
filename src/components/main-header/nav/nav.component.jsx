import React, { useEffect, useState } from 'react'
import {StyledNavBar} from '../../../styled/elements/navBar/NavBar.styled'
import {StyledNavLink} from '../../../styled/elements/navBar/NavLink.styled'
import {Cart4 as CartIcon} from '@styled-icons/bootstrap'
import Burger from './burger.component'
import { useScrollBlock } from '../../../custom-hooks/useBodyScrollBlock';
import { useWindowSize } from '../../../custom-hooks/useWindowSize';

export default function Nav() {
  const windowSize = useWindowSize()[0];
  const [blockScroll, allowScroll] = useScrollBlock();
  
  const [isNavOpen, setIsNavOpen] = useState(true);

  useEffect(() => {
    isNavOpen ? blockScroll() : allowScroll();
  }, [allowScroll, blockScroll, isNavOpen]);

  useEffect(() => {
    if (windowSize <= 768) {
      setIsNavOpen(false);
    };
  }, [windowSize]);

  const onBurgerClickHandler = () => setIsNavOpen((prevState) => !prevState);

  const links = [
    {
      to: '/shop',
      content: 'Shop'
    },
    {
      to: '/contact',
      content: 'Contact'
    },
    {
      to: '/login',
      content: 'Sign in'
    },
    {
      to: '/cart',
      content: <CartIcon/>
    }
  ]

    return (
        <>
        <Burger 
          isNavOpen={isNavOpen} 
          onBurgerClick={onBurgerClickHandler}
        />
        <StyledNavBar 
          isNavOpen={isNavOpen}
        >
          {links.map((el, idx) => {
            const { to, content } = el;
            return <StyledNavLink key={idx} to={to}>{content}</StyledNavLink>
          })}
        </StyledNavBar>
        </>
    )
}
