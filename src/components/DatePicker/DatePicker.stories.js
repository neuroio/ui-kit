import React from "react";
import { useState } from "react";
import { DatePicker } from "./index.jsx";

export default {
  title: "Controls/DatePicker",
  component: DatePicker,
  argTypes: {},
  args: {},
};

const Template = (args) => {
  const [value, setValue] = useState([null, null]);

  return <DatePicker {...args} value={value} onChange={setValue} />;
};

export const Basic = Template.bind({});
Basic.args = {};
