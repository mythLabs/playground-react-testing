import React from "react";
import CommentList from "components/CommentList";
import { mount } from "enzyme";
import { wrap } from "module";
import Root from "root";

let wrapped;

beforeEach(() => {
    const intitialState = {
        comments: ['comment 1','comment 2']
    }


  wrapped = mount(
    <Root  intitialState={intitialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
});

it('it shows text for each comment',() => {
    //enzyme wrapped.render() return cheerio type object
     expect(wrapped.render().text()).toContain('comment 1')
     expect(wrapped.render().text()).toContain('comment 1')
})
