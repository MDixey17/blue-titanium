import React from "react"
import Divider from "./Divider"
import { StoryFn, Meta } from "@storybook/react/*"

export default {
  title: "BlueTitanium/Divider",
  component: Divider,
} as Meta<typeof Divider>

const Template: StoryFn<typeof Divider> = (args) => <Divider {...args} />

export const DefaultProps = Template.bind({})

export const BlueDivider = Template.bind({})
BlueDivider.args = {
  isBlue: true,
}
