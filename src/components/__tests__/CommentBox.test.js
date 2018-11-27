import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import { wrap } from "module";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and b button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("it has a text are that users can type it", () => {

    //simulate change event ,provide fake event object
  wrapped.find("textarea").simulate("change", {
    target: {
      value: 'new comment'
    }
  });

  // Re-render
  wrapped.update();

  //assertion
  expect(wrapped.find("textarea").prop('value')).toEqual('new comment');
});
