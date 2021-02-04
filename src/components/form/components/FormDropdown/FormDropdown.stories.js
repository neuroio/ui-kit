import React from "react";
import { useState } from "react";
import { FormDropdown } from "./index";

import { generateOptions } from "../../../../../test/generate";

const options = generateOptions(15);

export default {
  title: "Form Components/FormDropdown",
  component: FormDropdown,
  argTypes: {},
  args: {
    ...FormDropdown.defaultProps,
    options,
    width: 200,
  },
  parameters: {
    docs: {
      description: {
        component: "Simple controlled dropdown component",
      },
    },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.multiple ? [] : null);

  return (
    <FormDropdown
      {...args}
      value={selected}
      onChange={(value) => {
        setSelected(value);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithSearch = Template.bind({});
WithSearch.args = {
  withSearch: true,
};

export const WithCustomItemRender = Template.bind({});
WithCustomItemRender.args = {
  renderItem: (item) => (
    <span>{`${item.value % 2 === 0 ? "🍎" : "🍌"} ${item.label}`}</span>
  ),
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};

export const MultipleWithSingleOption = Template.bind({});
MultipleWithSingleOption.args = {
  multiple: true,
  options: [
    {
      label: "single",
      value: "some_single_value",
      single: true,
    },
  ].concat(options),
};

export const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
  options: [
    {
      label: "disabled",
      value: "some_disabled_value",
      disabled: true,
    },
  ].concat(options),
};
