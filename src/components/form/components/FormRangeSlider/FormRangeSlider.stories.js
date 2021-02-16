import React from "react";
import { useState } from "react";
import { FormRangeSlider } from "./index";

export default {
  title: "Form Components/FormRangeSlider",
  component: FormRangeSlider,
  argTypes: {},
  args: {
    minFrom: 0,
    maxTo: 100,
    width: 200,
  },
  parameters: {
    docs: {
      description: {
        component: "Simple controlled range component",
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState([args.from || 0, args.to || 99]);

  return (
    <div style={{ marginTop: 20 }}>
      <FormRangeSlider
        {...args}
        from={value[0]}
        to={value[1]}
        onChange={setValue}
      />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
