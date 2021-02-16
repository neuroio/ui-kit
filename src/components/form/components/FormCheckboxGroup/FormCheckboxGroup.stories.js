import React from "react";

import { useState } from "react";

import { FormCheckboxGroup } from "./index";

import { generateOptions } from "../../../../../test/generate";
import styled from "styled-components";
import { FormLabelTitle } from "../FormLabel";

const options = generateOptions(5);

export default {
  title: "Form Components/FormCheckboxGroup",
  component: FormCheckboxGroup,
  argTypes: {},
  args: {
    options,
    renderCheckbox: FormCheckboxGroup.defaultProps.renderCheckbox,
  },
  parameters: {
    docs: {
      description: {
        component: "Simple controlled checkbox component",
      },
    },
  },
};

const StyledForm = styled.form`
  ${FormLabelTitle} {
    width: 200px;
  }
`;

const Template = (args) => {
  const [checked, setChecked] = useState(args.value);

  return (
    <StyledForm>
      <FormCheckboxGroup
        {...args}
        groupName="test-group"
        options={args.options}
        value={checked}
        onChange={setChecked}
        render={({ checkboxes, ...selectableProps }) => (
          <div>
            <FormCheckboxGroup.Item
              name="test-group-select-all"
              label="Select all"
              data-testid="test-group-select-all"
              checked={selectableProps.isAllSelected}
              onChange={({ target }) => {
                if (target.checked) {
                  selectableProps.selectAll();
                } else {
                  selectableProps.deselectAll();
                }
              }}
            />
            <FormCheckboxGroup.Item
              name="test-group-deselect-all"
              label="Deselect all"
              data-testid="test-group-deselect-all"
              checked={selectableProps.isAllDeselected}
              onChange={({ target }) => {
                if (!target.checked) {
                  selectableProps.selectAll();
                } else {
                  selectableProps.deselectAll();
                }
              }}
            />
            {checkboxes()}
          </div>
        )}
      />
    </StyledForm>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
