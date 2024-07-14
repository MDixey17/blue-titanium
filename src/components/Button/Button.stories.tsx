import React, { BaseSyntheticEvent } from "react"
import Button from "./Button"
import { StoryFn, Meta } from "@storybook/react"

export default {
  title: "BlueTitanium/Button",
  component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  onClick: () => alert("Primary Button Clicked!"),
  type: "primary",
  children: <>Primary</>,
  className: "story-button1",
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  onClick: () => alert("Secondary Button Clicked!"),
  type: "secondary",
  children: <>Secondary</>,
  className: "story-button2",
}

export const DeleteButton = Template.bind({})
DeleteButton.args = {
  onClick: () => alert("Delete Button Clicked!"),
  type: "delete",
  children: <>Delete</>,
  className: "story-button3",
}
