import React from "react";
import { CopyItem } from "./index.jsx";

export default {
  title: "Controls/CopyItem",
  component: CopyItem,
  argTypes: {},
  args: {
    children: "Copy me",
  },
};

const Template = (args) => <CopyItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
