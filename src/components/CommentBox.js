import React from "react";
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
  state = { comment: ''};

  onTextChange = (e) => {
     this.setState({comment: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment)

    this.setState({comment: ''})
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <h4>Add a Comment</h4>
        <textarea value = {this.state.comment} onChange={this.onTextChange}/>
        <div>
          <button>submit a comment</button>
        </div>
      </form>
    )
  }
}



export default connect(null,actions)(CommentBox);
