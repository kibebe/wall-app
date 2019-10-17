import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMessages } from "./../../actions/messages";
import { Card } from 'react-bootstrap'

export class Messages extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    getMessages: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    return (
      <Fragment>
        <h2>Messages</h2>
        {this.props.messages.length > 0 ? (
        this.props.messages.map(message => (
          <div className="row" key={message.id} style={{ marginBottom: '2em'}}>
            <div className="col-lg-12">
                <Card className="text-center">
                    <Card.Header>{message.created_by}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        {message.content}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{message.created_at}</Card.Footer>
                </Card>
            </div>
          </div>
        ))): 
        <h6>No posts yet</h6> }
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
