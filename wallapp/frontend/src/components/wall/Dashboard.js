import React, { Component, Fragment } from "react";
import Form from "./Form";
import Messages from "./Messages";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Dashboard extends Component {
  static propTypes = {
      auth: PropTypes.object.isRequired
}
  render(){
  return (
    <Fragment>
      {this.props.auth.isAuthenticated ? <Form /> : <Fragment />}
      <Messages />
    </Fragment>
  );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
