import { signOutUser } from '../../utils/firebase.utils'
import { StyledNavBar } from './nav-bar.styled'
import { Link } from '../../components/link'
import { Cart4 as CartIcon } from '@styled-icons/bootstrap'

function NavBarComponent({ isMobileMenuOpen, currentUser }) {
    return (
      <StyledNavBar isMobileMenuOpen={isMobileMenuOpen}>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/contact'}>Contact</Link>
        {!currentUser ? 
          <Link to={'/login'}>Sign in</Link> : 
          <Link to={'/'} onClick={signOutUser}>Sign out</Link>
        }
        {!currentUser ? 
          <Link to={'/register'}>Sign up</Link> : 
          null
        }
        <Link to={'/cart'}><CartIcon/></Link>
      </StyledNavBar>
    )
}

export { NavBarComponent }