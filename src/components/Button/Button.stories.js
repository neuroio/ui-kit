import React from "react";
import { Button } from "./index.jsx";

export default {
  title: "Controls/Button",
  component: Button,
  argTypes: {},
  args: {
    children: "Click me",
  },
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
