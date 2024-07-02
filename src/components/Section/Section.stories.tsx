import React from "react";
import Section from "./Section";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/Section",
  component: Section,
} as Meta<typeof Section>;

const Template: StoryFn<typeof Section> = (args) => <Section {...args} />;

export const PrimaryRow = Template.bind({});
PrimaryRow.args = {
  align: "center",
  direction: "row",
  divider: true,
  isPrimary: true,
  justify: "center",
  children: (
    <>
      <p>Example 1</p>
      <p>Example 2</p>
      <p>Example 3</p>
      <p>Example 4</p>
      <p>Example 5</p>
      <p>Example 6</p>
    </>
  ),
};

export const SecondaryColumn = Template.bind({});
SecondaryColumn.args = {
  align: "center",
  direction: "column",
  divider: false,
  isPrimary: false,
  justify: "center",
  children: (
    <>
      <p>Example 1</p>
      <p>Example 2</p>
      <p>Example 3</p>
      <p>Example 4</p>
      <p>Example 5</p>
      <p>Example 6</p>
    </>
  ),
};
