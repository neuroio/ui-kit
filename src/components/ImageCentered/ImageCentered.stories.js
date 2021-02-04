import React from "react";
import { ImageCentered } from "./index.jsx";

export default {
  title: "Data display/ImageCentered",
  component: ImageCentered,
  argTypes: {},
  args: {
    src: "https://source.unsplash.com/120x200/?face",
  },
};

const Template = (args) => (
  <div style={{ width: 120, height: 400 }}>
    <ImageCentered {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};
