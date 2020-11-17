import React from "react";
import { shallow } from "enzyme";
import HeartPaw from "./HeartPaw";

describe("HeartPaw", () => {
  it("should have correct stroke and fill when not filled", () => {
    const wrapper = shallow(<HeartPaw />);
    expect(wrapper.find("path").first().prop("stroke")).toBe("#e1738c");
    expect(wrapper.find("path").first().prop("fill")).toBe("#fff");
  });

  it("should have correct stroke and fill when filled", () => {
    const wrapper = shallow(<HeartPaw filled />);
    expect(wrapper.find("path").first().prop("stroke")).toBeUndefined();
    expect(wrapper.find("path").first().prop("fill")).toBe("#ff0000");
  });
});
