import React from "react";
import ProfilePic from "./ProfilePic";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/ProfilePic",
  component: ProfilePic,
} as Meta<typeof ProfilePic>;

const Template: StoryFn<typeof ProfilePic> = (args) => <ProfilePic {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: "xs",
  img: "",
  altText: "Lando Norris",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  img: "",
  altText: "Lando Norris",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  img: "",
  altText: "Lando Norris",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  img: "",
  altText: "Lando Norris",
};
