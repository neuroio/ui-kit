import React from "react";
import { useState, useMemo } from "react";

import { FormFromToPicker } from "./index";
import { InfiniteDropdown } from "../../../InfiniteDropdown";

import { generateOptions } from "../../../../../test/generate";
import { noop } from "lodash-es";

const fromOptions = generateOptions(15);
const toOptions = generateOptions(15);

export default {
  title: "Form Components/FormFromToPicker",
  component: FormFromToPicker,
  argTypes: {},
  args: {
    ...FormFromToPicker.defaultProps,
    fromOptions,
    toOptions,
    width: 320,
  },
  parameters: {
    docs: {
      description: {
        component: "Use this component for from -> to choice",
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState([null, null]);

  const items = useMemo(
    () => [
      {
        label: "From",
        value: "from",
        Component: (
          <InfiniteDropdown
            value={value[0]}
            fetchOptions={noop}
            onChange={(selected) => {
              setValue([selected, value[1]]);
            }}
            options={fromOptions}
            inline={true}
            withSearch={true}
          />
        ),
      },
      {
        label: "To",
        value: "to",
        Component: (
          <InfiniteDropdown
            value={value[1]}
            fetchOptions={noop}
            onChange={(selected) => {
              setValue([value[0], selected]);
            }}
            options={toOptions}
            inline={true}
            withSearch={true}
          />
        ),
      },
    ],
    [value, setValue, fromOptions, toOptions]
  );

  return (
    <FormFromToPicker
      {...args}
      value={value}
      onChange={setValue}
      placeholder="select something...."
      data-testid="form-from-to-picker"
    >
      <FormFromToPicker.Tabs items={items} />
    </FormFromToPicker>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
