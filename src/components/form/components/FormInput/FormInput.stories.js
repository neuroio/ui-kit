import React from "react";
import { useState } from "react";
import { FormInput } from "./index";

export default {
  title: "Form Components/FormInput",
  component: FormInput,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: "Simple controlled input component",
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <FormInput
      {...args}
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};

const PasswordTemplate = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <FormInput.Password
      {...args}
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
    />
  );
};

export const Password = PasswordTemplate.bind({});
Password.args = {};

const UneditableTemplate = (args) => {
  return <FormInput.Uneditable {...args} />;
};

export const Uneditable = UneditableTemplate.bind({});
Uneditable.args = {
  value: "some value",
};

const AutoSizeTemplate = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <form>
      <FormInput.AutoSize
        {...args}
        name="name"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </form>
  );
};

export const AutoSize = AutoSizeTemplate.bind({});
AutoSize.args = {
  value: "as",
};
