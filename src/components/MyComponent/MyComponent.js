import React from 'react';
import PropTypes from 'prop-types';

import withLog from '../hoc/withLog';

const MyComponent = ({ something, hocProp }) => (
  <div>
    <h2>{something}</h2>
    <p>{hocProp}</p>
  </div>
);

MyComponent.propTypes = {
  hocProp: PropTypes.string.isRequired,
  something: PropTypes.string.isRequired,
};

export default withLog(MyComponent);
