import React from "react";
import { useState } from "react";
import { FormSwitch } from "./index";

export default {
  title: "Form Components/FormSwitch",
  component: FormSwitch,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: "Simple controlled switch component",
      },
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <FormSwitch
      {...args}
      name={args.name || "form-switch"}
      checked={checked}
      onChange={({ target: { checked } }) => setChecked(checked)}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};
