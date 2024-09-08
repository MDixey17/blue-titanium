import React from "react"
import Modal from "./Modal"
import { StoryFn, Meta } from "@storybook/react/*"

export default {
  title: "BlueTitanium/Modal",
  component: Modal,
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />

let SHOW_VALUE = false

export const Example = Template.bind({})
Example.args = {
  heading: "Example",
  show: SHOW_VALUE,
  children: (
    <p>
      This is a bunch of content to example what it would look like when the
      modal is opened so that it gives a clear visual representation to what to
      expect. This can also be any HTML component and not just text.
    </p>
  ),
}
