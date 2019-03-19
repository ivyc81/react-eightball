import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import EightBall from "./EightBall";

// smoke test
it("renders without crashing", function() {
  mount(<EightBall />);
});

// snapshot test
it("matches snapshot", function() {
  let wrapper = mount(<EightBall />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it("renders initial message with correct color", function() {
    let wrapper = mount(<EightBall />);

    let b_elem = wrapper.find('b').first();
    expect(b_elem.equals(<b>Think of a Question.</b>)).toEqual(true);
    expect(wrapper.matchesElement(<div className="EightBall" style="backgroundColor: black" />));
});

it("renders correct message", function() {
    let wrapper = mount(<EightBall a/>);

    wrapper.setState({ currentMsg: "test"});
    let b_elem = wrapper.find('b').first();
    expect(b_elem.equals(<b>test</b>)).toEqual(true);
});

it("changes default message on click", function() {
    const answerArr = [{ msg: "It is certain.", color: "green" }]
    let wrapper = mount(<EightBall answers={answerArr}/>);

    wrapper.simulate("click");
    let b_elem = wrapper.find('b').first();
    expect(b_elem.equals(<b>It is certain.</b>)).toEqual(true);
});

it("changes color on click", function() {
    const answerArr = [{ msg: "It is certain.", color: "green" }]
    let wrapper = mount(<EightBall answers={answerArr}/>);

    wrapper.simulate("click");
    expect(wrapper.matchesElement(<div className="EightBall" style="backgroundColor: green" />));
});

it("changes default message on click", function() {
    const answerArr = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" }
    ]
    let wrapper = mount(<EightBall answers={answerArr}/>);

    wrapper.simulate("click");
    expect(answerArr).toContainEqual({"color": wrapper.state().currentColor, "msg":wrapper.state().currentMsg});
});