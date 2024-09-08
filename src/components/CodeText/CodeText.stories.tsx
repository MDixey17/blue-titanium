import React from "react"
import CodeText from "./CodeText"
import { StoryFn, Meta } from "@storybook/react/*"

export default {
  title: "BlueTitanium/CodeText",
  component: CodeText,
} as Meta<typeof CodeText>

const Template: StoryFn<typeof CodeText> = (args) => <CodeText {...args} />

export const Example = Template.bind({})
Example.args = {
  children: <>npm i blue-titanium-ui</>,
}
