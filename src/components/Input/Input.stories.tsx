import React, { BaseSyntheticEvent } from "react";
import Input from "./Input";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "BlueTitanium/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

let textValue = "";
const setTextValue = (event: BaseSyntheticEvent) =>
  (textValue = event.target.value);
export const TextInput = Template.bind({});
TextInput.args = {
  label: "Text",
  type: "text",
  value: textValue,
  onUpdate: (event) => setTextValue(event.target.value),
};

let password = "";
const setPassword = (event: BaseSyntheticEvent) =>
  (textValue = event.target.value);
export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Password",
  type: "password",
  value: password,
  onUpdate: (event) => setPassword(event.target.value),
};

let date = "";
const setDate = (event: BaseSyntheticEvent) => (textValue = event.target.value);
export const DateInput = Template.bind({});
DateInput.args = {
  label: "Date",
  type: "date",
  value: date,
  onUpdate: (event) => setDate(event.target.value),
};

let checkbox = "";
const setCheckbox = (event: BaseSyntheticEvent) =>
  (textValue = event.target.value);
export const CheckboxInput = Template.bind({});
CheckboxInput.args = {
  label: "Checkbox",
  type: "checkbox",
  value: checkbox,
  onUpdate: (event) => setCheckbox(event.target.value),
};
