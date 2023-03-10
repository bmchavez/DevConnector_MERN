import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  // ...rest
}) => {
  // if (!isAuthenticated && !loading) return <Navigate to="/login" />;
  // return <Component />;
  if (loading) return null;
  if (isAuthenticated) return <Component />;

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
