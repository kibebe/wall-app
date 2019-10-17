import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
  };
  componentDidUpdate(prevProps) {
    const { error, alert, notification } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.content)
        alert.error(`Message: ${error.msg.content.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username)
        alert.error(`Username: ${error.msg.username.join()}`);
      if (error.msg.password)
        alert.error(`Password: ${error.msg.password.join()}`);
    }
    if (notification !== prevProps.error) {
      if (notification.messageAdded)
        alert.success(notification.messageAdded);
      if (notification.passwordDoNotMatch)
        alert.error(notification.passwordDoNotMatch);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  notification: state.notifications
});
export default connect(mapStateToProps)(withAlert()(Alerts));
