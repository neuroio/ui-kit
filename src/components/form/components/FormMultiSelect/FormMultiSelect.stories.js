import React from "react";
import { useState } from "react";
import { FormMultiSelect } from "./index";
import { generateOptions } from "../../../../../test/generate";

const options = generateOptions(10);

export default {
  title: "Form Components/FormMultiSelect",
  component: FormMultiSelect,
  argTypes: {},
  args: {
    options,
  },
  parameters: {
    docs: {
      description: {
        component: "Simple controlled multi select component",
      },
    },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState([]);

  return <FormMultiSelect {...args} value={selected} onChange={setSelected} />;
};

export const Basic = Template.bind({});
Basic.args = {};
