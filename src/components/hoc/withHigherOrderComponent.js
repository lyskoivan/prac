import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withHigherOrderComponent = WrappedComponent => {
  return class WthHigherOrderComponent extends Component {
    static propTypes = {
      something: PropTypes.string.isRequired,
    };

    componentDidMount() {
      console.group(`WithLog ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      const { something } = this.props;
      return (
        <WrappedComponent
          something={something}
          extraProp="This prop is from HOC"
        />
      );
    }
  };
};

export default withHigherOrderComponent;
