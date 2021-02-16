import React from "react";
import { IdCopy } from "./index.jsx";
import { personMock } from "../../../test/__mocks__";

export default {
  title: "IDS/IdCopy",
  component: IdCopy,
  argTypes: {},
  args: {
    children: personMock.pid,
  },
};

const Template = (args) => <IdCopy {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
