import React from "react";
import ImageCard from "./ImageCard";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/ImageCard",
  component: ImageCard,
} as Meta<typeof ImageCard>;

const Template: StoryFn<typeof ImageCard> = (args) => <ImageCard {...args} />;

export const ImageCardTest = Template.bind({});
ImageCardTest.args = {
  imgPath: "",
  text: "Example",
};
