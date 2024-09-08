import React from "react"
import HighlightText from "./HighlightText"
import { StoryFn, Meta } from "@storybook/react/*"

export default {
  title: "BlueTitanium/HighlightText",
  component: HighlightText,
} as Meta<typeof HighlightText>

const Template: StoryFn<typeof HighlightText> = (args) => (
  <HighlightText {...args} />
)

export const Example = Template.bind({})
Example.args = {
  children: <>This is highlighted text.</>,
}
