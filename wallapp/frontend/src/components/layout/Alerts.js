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
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
    }
    if (notification !== prevProps.error) {
      if (notification.messageAdded)
        alert.success(notification.messageAdded);
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
