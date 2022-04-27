import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components at the very least render the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.find("div.App-footer p")).toHaveLength(1);
    expect(wrapper.find("div.App-footer p").text()).toContain("Copyright");
  });
});