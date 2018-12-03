import React, { Component } from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

export default App;
