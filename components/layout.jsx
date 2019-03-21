import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Layout = ({ title, children }) => (
  <Fragment>
    <h1>{title}</h1>
    {children}
  </Fragment>
);

Layout.propTypes = {
  title: PropTypes.string
};

Layout.defaultProps = {
  title: 'Untitled'
};

export default Layout;