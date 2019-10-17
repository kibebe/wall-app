import React, { Component } from "react";
import { addMessage } from './../../actions/messages';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export class Form extends Component {
  state = {
      continue: "",
    }
    
  static propTypes = {
      addMessage: PropTypes.func.isRequired
  }
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  onSubmit = e => {
     e.preventDefault();
     const { content } = this.state;
     const data = { content };
     this.props.addMessage(data);
     this.setState({
         content: ""
    });
    }
  
  render() {
    const { content } = this.state;
    
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add message</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="content"
              onChange={this.onChange}
              value={content}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {addMessage})(Form);
