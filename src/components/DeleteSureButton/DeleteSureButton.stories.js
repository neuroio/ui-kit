import React from "react";
import { DeleteSureButton } from "./index.jsx";
import { colors } from "../../style/index.js";

export default {
  title: "Controls/DeleteSureButton",
  component: DeleteSureButton,
  argTypes: {
    deleteColor: { control: "color" },
  },
  args: {
    deleteColor: colors.brownSimple,
  },
  parameters: {
    docs: {
      description: {
        component: "Use this button if you need delete confirmation",
      },
    },
  },
};

const Template = (args) => <DeleteSureButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
