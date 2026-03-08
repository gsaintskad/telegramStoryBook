import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, TabsList, Tabbar, AppRoot } from "@telegram-apps/telegram-ui";
import React, { useState } from "react";

const meta: Meta = {
  title: "Telegram UI/Layout and Grouping",
  tags: ["autodocs"],
};

export default meta;

export const AppRootStory: StoryObj<typeof AppRoot> = {
  render: (args) => (
    <AppRoot {...args}>
      <div style={{ padding: "20px", border: "1px dashed var(--tg-theme-hint-color)" }}>
        Inside AppRoot Content
      </div>
    </AppRoot>
  ),
  args: {
    appearance: "dark",
    platform: "ios",
  },
};

export const AccordionStory: StoryObj<typeof Accordion> = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Summary>Tap to expand</Accordion.Summary>
      <Accordion.Content>
        <div style={{ padding: "16px" }}>
          This is the content hidden inside the accordion. It animates open and closed smoothly.
        </div>
      </Accordion.Content>
    </Accordion>
  ),
};

export const TabsStory: StoryObj<typeof TabsList> = {
  render: () => {
    const [selected, setSelected] = useState("1");
    return (
      <TabsList>
        <TabsList.Item selected={selected === "1"} onClick={() => setSelected("1")}>
          Tab 1
        </TabsList.Item>
        <TabsList.Item selected={selected === "2"} onClick={() => setSelected("2")}>
          Tab 2
        </TabsList.Item>
        <TabsList.Item selected={selected === "3"} onClick={() => setSelected("3")}>
          Tab 3
        </TabsList.Item>
      </TabsList>
    );
  },
};

const TabIcon = ({ name }: { name: string }) => (
  <div style={{ width: 28, height: 28, background: "rgba(128,128,128,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>
    {name}
  </div>
);

export const TabbarStory: StoryObj<typeof Tabbar> = {
  render: () => {
    const [selected, setSelected] = useState(0);
    return (
      <div style={{ height: "200px", position: "relative", border: "1px solid var(--tg-theme-hint-color)" }}>
        <div style={{ padding: "20px" }}>Active Tab Content: {selected}</div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Tabbar>
            <Tabbar.Item
              text="Home"
              selected={selected === 0}
              onClick={() => setSelected(0)}
            >
              <TabIcon name="H" />
            </Tabbar.Item>
            <Tabbar.Item
              text="Search"
              selected={selected === 1}
              onClick={() => setSelected(1)}
            >
              <TabIcon name="S" />
            </Tabbar.Item>
            <Tabbar.Item
              text="Profile"
              selected={selected === 2}
              onClick={() => setSelected(2)}
            >
              <TabIcon name="P" />
            </Tabbar.Item>
          </Tabbar>
        </div>
      </div>
    );
  },
};
