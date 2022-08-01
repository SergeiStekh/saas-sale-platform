import PropTypes from 'prop-types';
import { Wrapper } from "./wrapper.styled";
import { BurgerComponent } from "./burger.component";

const Burger = ({isMobileMenuOpen, onClick}) => {
  return (
    <Wrapper>
      <BurgerComponent isMobileMenuOpen={isMobileMenuOpen} onClick={onClick}/>
    </Wrapper>
  )
}

export { Burger }

Burger.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}