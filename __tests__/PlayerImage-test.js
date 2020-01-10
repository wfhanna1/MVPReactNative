/**
 * @format
 */

import React from "react";
import "react-native";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import PlayerImage from "../components/PlayerImage";
import ResponsiveSize from "../config/getScreenDimensions";

it("renders correctly", () => {
	renderer.create(<PlayerImage />);
});

it("snapshot renders correctly", () => {
	const tree = renderer.create(<PlayerImage />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree.props.source.testUri).toEqual("../../../assets/icons/Default-user.png");
});

it("renders correctly with data - default", () => {
	const tree = renderer.create(<PlayerImage profilePhoto="foo" fullName="bar" />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree.props.source.uri).toEqual("foo");
	expect(tree.props.style[0].height).toEqual(ResponsiveSize(5));
	expect(tree.props.style[0].width).toEqual(ResponsiveSize(5));
	expect(tree.props.style[0].borderWidth).toEqual(3);
});

it("renders correctly with data - large", () => {
	const tree = renderer.create(<PlayerImage profilePhoto="foo" fullName="bar" large />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree.props.style[0].height).toEqual(150);
	expect(tree.props.style[0].width).toEqual(150);
	expect(tree.props.style[1].height).toEqual(130);
	expect(tree.props.style[1].width).toEqual(130);
	expect(tree.props.style[1].borderWidth).toEqual(7);
});

it("renders correctly with data - winner", () => {
	const tree = renderer.create(<PlayerImage profilePhoto="foo" fullName="bar" isWinner />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree.props.style[0].height).toEqual(ResponsiveSize(5));
	expect(tree.props.style[0].width).toEqual(ResponsiveSize(5));
	expect(tree.props.style[0].borderWidth).toEqual(3);
	expect(tree.props.style[2].borderColor).toEqual("#399D60");
});

it("renders correctly with data - winner large", () => {
	const tree = renderer.create(<PlayerImage profilePhoto="foo" fullName="bar" isWinner large />).toJSON();
	expect(tree).toMatchSnapshot();
	expect(tree.props.style[0].height).toEqual(150);
	expect(tree.props.style[0].width).toEqual(150);
	expect(tree.props.style[1].height).toEqual(130);
	expect(tree.props.style[1].width).toEqual(130);
	expect(tree.props.style[1].borderWidth).toEqual(7);
	expect(tree.props.style[2].borderColor).toEqual("#399D60");
});
