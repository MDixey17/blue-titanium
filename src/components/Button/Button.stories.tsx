import React, { BaseSyntheticEvent } from "react";
import Button from "./Button";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  onClick: (event: BaseSyntheticEvent) => alert("Primary Button Clicked!"),
  type: "primary",
  children: <>Primary</>,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  onClick: (event: BaseSyntheticEvent) => alert("Secondary Button Clicked!"),
  type: "secondary",
  children: <>Secondary</>,
};

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  onClick: (event: BaseSyntheticEvent) => alert("Delete Button Clicked!"),
  type: "delete",
  children: <>Delete</>,
};
