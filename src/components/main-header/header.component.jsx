import React from 'react'
import { Outlet } from 'react-router-dom'
import { StyledHeader } from '../../styled/elements/header/header.styled'
import Logo from './logo.component'
import logoImage from '../../assets/images/logo.png'
import Nav from './nav/nav.component'
import {Cart4 as CartIcon} from '@styled-icons/bootstrap'

export default function Header() {
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
    <StyledHeader>
      <Logo image={logoImage}/>
      <Nav links={links}/>
    </StyledHeader>
    <Outlet/>
    </>
  )
}
