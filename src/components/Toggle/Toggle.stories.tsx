import React, { BaseSyntheticEvent } from "react"
import Toggle from "./Toggle"
import { StoryFn, Meta } from "@storybook/react/*"

export default {
  title: "BlueTitanium/Toggle",
  component: Toggle,
} as Meta<typeof Toggle>

const Template: StoryFn<typeof Toggle> = (args) => <Toggle {...args} />

const defaultFunction = (event: BaseSyntheticEvent) => {
  console.log("Toggle event: ", event)
}
const defaultLabel = "Example"

export const EnabledToggle = Template.bind({})
EnabledToggle.args = {
  value: true,
  onUpdate: defaultFunction,
  label: defaultLabel,
}

export const DisabledToggle = Template.bind({})
DisabledToggle.args = {
  value: false,
  onUpdate: defaultFunction,
  label: defaultLabel,
}
