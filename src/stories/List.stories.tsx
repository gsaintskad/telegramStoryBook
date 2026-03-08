import type { Meta, StoryObj } from "@storybook/react";
import { List, Section, Cell } from "@telegram-apps/telegram-ui";
import React from "react";

const meta: Meta<typeof List> = {
  title: "Telegram UI/List",
  component: List,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List>
      <Section header="General Info" footer="This is the footer of section one">
        <Cell subtitle="Subtitle info">First Setting</Cell>
        <Cell subtitle="Another info">Second Setting</Cell>
      </Section>
      <Section header="Advanced Info" footer="This is the footer of section two">
        <Cell>Option A</Cell>
        <Cell>Option B</Cell>
      </Section>
    </List>
  ),
};

export const SingleSection: Story = {
  render: () => (
    <List>
      <Section>
        <Cell>Item 1</Cell>
        <Cell>Item 2</Cell>
        <Cell>Item 3</Cell>
      </Section>
    </List>
  ),
};

export const MixedContentList: Story = {
  render: () => (
    <List>
      <Section header="Profile Options">
        <Cell subtitle="Manage your active sessions">Sessions</Cell>
        <Cell subtitle="Control your visibility">Privacy</Cell>
      </Section>
      <Section header="Appearance">
        <Cell subtitle="Adjust app themes">Theme Configuration</Cell>
      </Section>
    </List>
  ),
};
