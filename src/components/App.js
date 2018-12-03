import React, { Component } from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li> {this.renderButton()}</li>
      </ul>
    );
  };

  renderButton = () => {
    if (this.props.auth) {
      return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>;
    } else {
      return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
    }
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStatesToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStatesToProps,
  actions
)(App);
