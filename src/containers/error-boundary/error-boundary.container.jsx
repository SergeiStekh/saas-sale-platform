import React, {Component} from 'react'
import PropTypes from "prop-types"
import { ErrorIndicator } from '../../components/error-indicator';

class ErrorBoundaryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            error: null,
            info: null
        }
    }

    componentDidCatch(error, info) {
        this.setState({
          isError: true, 
          error, 
          info
        })
    }

    render() {
      const {isError, error, info} = this.state;
      const { children } = this.props;

      return isError ? 
      <ErrorIndicator error={error} info={info}/> : 
      children;
    }
}

ErrorBoundaryContainer.propTypes = {
  children: PropTypes.node
}

export { ErrorBoundaryContainer }