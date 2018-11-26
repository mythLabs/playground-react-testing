import React from 'react';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

it('Shows a comment box',() => {
  const wrapped = shallow(<App />)

  expect(wrapped.find(CommentBox).length).toEqual(1);
  

});

it('Shows a comment List',() => {
  const wrapped = shallow(<App />)

  expect(wrapped.find(CommentList).length).toEqual(1);
  

});
