import React from "react";
import Heading from "./Heading";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/Heading",
  component: Heading,
} as Meta<typeof Heading>;

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const BlueXLHeading = Template.bind({});
BlueXLHeading.args = {
  size: "xl",
  isBlue: true,
  children: <>Example Heading</>,
};

export const LGHeading = Template.bind({});
LGHeading.args = {
  size: "lg",
  isBlue: false,
  children: <>Example Heading</>,
};

export const BlueMDHeading = Template.bind({});
BlueMDHeading.args = {
  size: "md",
  isBlue: true,
  children: <>Example Heading</>,
};

export const SMHeading = Template.bind({});
SMHeading.args = {
  size: "sm",
  isBlue: false,
  children: <>Example Heading</>,
};

export const BlueXSHeading = Template.bind({});
BlueXSHeading.args = {
  size: "xs",
  isBlue: true,
  children: <>Example Heading</>,
};
