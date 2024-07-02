import React from "react";
import ListCard from "./ListCard";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/ListCard",
  component: ListCard,
} as Meta<typeof ListCard>;

const Template: StoryFn<typeof ListCard> = (args) => <ListCard {...args} />;

export const Formula1Example = Template.bind({});
Formula1Example.args = {
  title: "Silverstone Times",
  data: [
    ["NORRIS", "1:11:111"],
    ["HAMILTON", "1:11:111"],
    ["VERSTAPPEN", "1:11:111"],
    ["RUSSELL", "1:11:111"],
    ["LECLERC", "1:11:111"],
    ["SAINZ", "1:11:111"],
    ["PIASTRI", "1:11:111"],
    ["PEREZ", "1:11:111"],
  ],
};
