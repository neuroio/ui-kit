import React from "react";
import { useState } from "react";
import { FormCheckbox } from "./index";

export default {
  title: "Form Components/FormCheckbox",
  component: FormCheckbox,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: "Simple controlled checkbox component",
      },
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <FormCheckbox
      {...args}
      name="form-checkbox"
      checked={checked}
      onChange={() => {
        setChecked((checked) => !checked);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};
