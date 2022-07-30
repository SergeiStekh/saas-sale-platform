import { Outlet } from 'react-router-dom'
import { StyledHeader } from '../../styled/elements/header/header.styled'
import Logo from './logo.component'
import { logoImage } from '../../styled/icons/icons'
import Nav from './nav/nav.component'

export default function Header() {
  return (
    <>
    <StyledHeader>
      <Logo image={logoImage}/>
      <Nav/>
    </StyledHeader>
    <Outlet/>
    </>
  )
}
