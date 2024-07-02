import React from "react";
import Chip from "./Chip";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/Chip",
  component: Chip,
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />;

export const PrimaryChip = Template.bind({});
PrimaryChip.args = {
  type: "primary",
  children: <>Primary</>,
};

export const SecondaryChip = Template.bind({});
SecondaryChip.args = {
  type: "secondary",
  children: <>Secondary</>,
};
