import type { Meta, StoryObj } from "@storybook/react";
import { Input, Select, Textarea, ColorInput, Multiselect } from "@telegram-apps/telegram-ui";
import React from "react";

const meta: Meta = {
  title: "Telegram UI/Inputs and Forms/Text Fields",
  tags: ["autodocs"],
};

export default meta;

export const InputStory: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
  args: {
    header: "Input Header",
    placeholder: "Enter some text...",
    status: "default",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["default", "error", "focused"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export const TextareaStory: StoryObj<typeof Textarea> = {
  render: (args) => <Textarea {...args} />,
  args: {
    header: "Message",
    placeholder: "Write your message here...",
  },
};

export const SelectStory: StoryObj<typeof Select> = {
  render: (args) => (
    <Select {...args}>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  ),
  args: {
    header: "Choose an option",
  },
};

export const MultiselectStory: StoryObj<typeof Multiselect> = {
  render: (args) => (
    <Multiselect {...args}>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="cherry">Cherry</option>
    </Multiselect>
  ),
  args: {
    header: "Select multiple fruits",
    placeholder: "Add fruits...",
  },
};

export const ColorInputStory: StoryObj<typeof ColorInput> = {
  render: (args) => <ColorInput {...args} />,
  args: {
    header: "Choose a color",
    defaultValue: "#ff0000",
  },
};
