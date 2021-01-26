import React from "react";
import { ButtonUpload } from "./index.jsx";

export default {
  title: "Controls/ButtonUpload",
  component: ButtonUpload,
  argTypes: {},
  args: {
    children: "Click me",
  },
};

const Template = (args) => <ButtonUpload {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
