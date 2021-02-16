import React from "react";
import { useState } from "react";
import { Breadcrumbs } from "./index.jsx";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
  args: {
    items: ["first", "second", "third"],
  },
  parameters: {
    docs: {
      description: {
        component: "Use this component if you need nested navigation",
      },
    },
  },
};

const Template = (args) => {
  const [active, setActive] = useState(args.items[0]);

  return (
    <Breadcrumbs {...args}>
      {args.items.map((item) => (
        <Breadcrumbs.Item
          key={item}
          isActive={active === item}
          onClick={() => {
            setActive(item);
          }}
        >
          {item}
        </Breadcrumbs.Item>
      ))}
    </Breadcrumbs>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
