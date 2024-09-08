import React from "react"
import Card from "./Card"
import { StoryFn, Meta } from "@storybook/react/*"

export default {
  title: "BlueTitanium/Card",
  component: Card,
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />

export const Example = Template.bind({})
Example.args = {
  children: (
    <ul>
      <li>Luke Skywalker</li>
      <li>Obi-Wan Kenobi</li>
      <li>Anakin Skywalker</li>
      <li>Ahsoka Tano</li>
      <li>Mace Windu</li>
      <li>Rey Skywalker</li>
      <li>Darth Vader</li>
    </ul>
  ),
}
