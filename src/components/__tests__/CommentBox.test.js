import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import { wrap } from "module";
import Root from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and b button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {

  beforeEach(() => {
    //simulate change event ,provide fake event object
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment"
      }
    });

    // Re-render
    wrapped.update();
  });

  it("it has a text are that users can type it", () => {
    //assertion
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("comment input text area is empty after comment submittion", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
