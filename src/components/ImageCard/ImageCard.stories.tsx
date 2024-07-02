import React from "react";
import ImageCard from "./ImageCard";
import { StoryFn, Meta } from "@storybook/react";
import UE5 from "./examples/ue5.png";

export default {
  title: "BlueTitanium/ImageCard",
  component: ImageCard,
} as Meta<typeof ImageCard>;

const Template: StoryFn<typeof ImageCard> = (args) => <ImageCard {...args} />;

export const ImageCardTest = Template.bind({});
ImageCardTest.args = {
  imgPath: UE5,
  text: "Example",
};
