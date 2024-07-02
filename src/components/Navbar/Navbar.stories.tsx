import React from "react";
import Navbar from "./Navbar";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarExample = Template.bind({});
NavbarExample.args = {
  left: (
    <>
      <p>Left 1</p>
      <p>Left 2</p>
    </>
  ),
  middle: (
    <>
      <p>Middle 1</p>
      <p>Middle 2</p>
    </>
  ),
  right: (
    <>
      <p>Right 1</p>
      <p>Right 2</p>
    </>
  ),
};
