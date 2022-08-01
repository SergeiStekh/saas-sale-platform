import PropTypes from 'prop-types'
import {Wrapper} from './wrapper.styled'
import {TextComponent} from './text.component'

const Text = ({children}) => {
    const content = typeof children === 'string'
        ? <TextComponent>{children}</TextComponent>
        : children.map((paragraph, idx) => <TextComponent key={idx}>{paragraph}</TextComponent>);

    return (
        <Wrapper>
            {content}
        </Wrapper>
    )
}

Text.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf([PropTypes.string])
    ])
}

export {Text};
