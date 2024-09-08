import React from "react"
import Statistic from "./Statistic"
import { StoryFn, Meta } from "@storybook/react/*"

export default {
  title: "BlueTitanium/Statistic",
  component: Statistic,
} as Meta<typeof Statistic>

const Template: StoryFn<typeof Statistic> = (args) => <Statistic {...args} />

export const PositiveDeltaStatistic = Template.bind({})
PositiveDeltaStatistic.args = {
  label: "Positive",
  value: 123.45,
  delta: 6.78,
  time: "Sept. 8, 2024",
}

export const NegativeDeltaStatistic = Template.bind({})
NegativeDeltaStatistic.args = {
  label: "Negative",
  value: 123.45,
  delta: -6.78,
  time: "Sept. 8, 2024",
}

export const PositiveDeltaNoTime = Template.bind({})
PositiveDeltaNoTime.args = {
  label: "Positive No Time",
  value: 123.45,
  delta: 6.789,
}
