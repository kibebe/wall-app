import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMessages } from "./../../actions/messages";

export class Messages extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <Fragment>
        <h2>Messages</h2>
        {this.props.messages.map(message => (
          <div className="row" key={message.id}></div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Messages);
