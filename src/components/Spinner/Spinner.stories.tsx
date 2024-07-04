import React from "react";
import Spinner from "./Spinner";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/Spinner",
  component: Spinner,
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />;

export const SmallSpinner = Template.bind({});
SmallSpinner.args = {
  size: "sm",
};

export const MediumSpinner = Template.bind({});
MediumSpinner.args = {
  size: "md",
};

export const LargeSpinner = Template.bind({});
LargeSpinner.args = {
  size: "lg",
};
