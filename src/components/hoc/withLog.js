import React, { Component } from 'react';

const withLog = WrappedComponent => {
  return class WthHigherOrderComponent extends Component {
    componentDidMount() {
      console.group(`WithLog ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return (
        <WrappedComponent {...this.props} hocProp="This prop is from HOC" />
      );
    }
  };
};

export default withLog;
