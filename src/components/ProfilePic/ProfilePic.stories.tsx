import React from "react";
import ProfilePic from "./ProfilePic";
import { StoryFn, Meta } from "@storybook/react";
import LandoNorris from "./examples/lando.jpg";

export default {
  title: "BlueTitanium/ProfilePic",
  component: ProfilePic,
} as Meta<typeof ProfilePic>;

const Template: StoryFn<typeof ProfilePic> = (args) => <ProfilePic {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: "xs",
  img: LandoNorris,
  altText: "Lando Norris",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  img: LandoNorris,
  altText: "Lando Norris",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
  img: LandoNorris,
  altText: "Lando Norris",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  img: LandoNorris,
  altText: "Lando Norris",
};
