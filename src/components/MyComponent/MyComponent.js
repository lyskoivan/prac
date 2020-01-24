import React from 'react';
import PropTypes from 'prop-types';

import withHigherOrderComponent from '../hoc/withHigherOrderComponent';

const MyComponent = ({ extraProp }) => <div>{extraProp}</div>;

MyComponent.propTypes = {
  extraProp: PropTypes.string.isRequired,
};

export default withHigherOrderComponent(MyComponent);
