import PropTypes from "prop-types"
import React, {Component} from 'react'

export default class ErrorBoundary extends Component {
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

      if (isError) {
        console.log(error);
        return <div>An error occured - {info}</div>
      }
      
      return children
    }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
}
