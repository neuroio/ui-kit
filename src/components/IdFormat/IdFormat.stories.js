import React from "react";
import { IdFormat } from "./index.jsx";
import { personMock } from "../../../test/__mocks__";

export default {
  title: "IDS/IdFormat",
  component: IdFormat,
  argTypes: {},
  args: {
    children: personMock.pid,
  },
};

const Template = (args) => <IdFormat {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
