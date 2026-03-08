import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote, Caption, Headline, LargeTitle, Subheadline, Text, Title } from "@telegram-apps/telegram-ui";
import React from "react";

const meta: Meta = {
  title: "Telegram UI/Typography",
  tags: ["autodocs"],
  argTypes: {
    weight: {
      control: "select",
      options: ["1", "2", "3"],
      description: "Font weight variant.",
    },
    plain: {
      control: "boolean",
      description: "Whether the text should omit its default vertical margins.",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

export const TypographyShowcase: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <LargeTitle>Large Title Component</LargeTitle>
      <Title level="1">Title 1 Component</Title>
      <Title level="2">Title 2 Component</Title>
      <Title level="3">Title 3 Component</Title>
      <Headline>Headline Component</Headline>
      <Text>Standard Text Component. This is the default setting for basic paragraphs.</Text>
      <Subheadline>Subheadline Component</Subheadline>
      <Caption>Caption Component. Usually used for smaller descriptive text.</Caption>
      <Blockquote>Blockquote Component. For quoting other sources or highlighting textual data.</Blockquote>
    </div>
  ),
};

export const TextVariants: StoryObj<typeof Text> = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Text {...args} weight="1">Text with weight 1 (Boldest)</Text>
      <Text {...args} weight="2">Text with weight 2 (Semibold)</Text>
      <Text {...args} weight="3">Text with weight 3 (Medium)</Text>
      <Text {...args} caps>Text with caps prop</Text>
    </div>
  ),
};

export const CustomTypography: StoryObj<typeof Title> = {
  render: (args) => <Title {...args} />,
  args: {
    level: "1",
    weight: "1",
    children: "Interactive Typography Component",
  },
};
