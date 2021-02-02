import React from "react";
import { Header, HeaderTopMenu } from "./index.jsx";
import { HeaderTopMenuLinks, HeaderTopMenuUser } from "./HeaderTopMenu";
import { HeaderTopMenuUserDropdownItem } from "./HeaderTopMenu/HeaderTopMenuUser";
import { InfiniteDropdown } from "../InfiniteDropdown";
import { Plus, GearOutline } from "../icons/index.js";
import { generateOptions } from "../../../test/generate.js";
import { noop } from "lodash-es";

export default {
  title: "Layout/Header",
  component: Header,
  argTypes: {},
  args: {
    links: [
      {
        id: 1,
        title: "Home - neuroio",
        to: "https://neuroio.com",
      },
      {
        id: 2,
        title: "Knowledgebase",
        to: "https://neuroio.com",
      },
      {
        id: 3,
        title: "Syshealth",
        to: "https://neuroio.com",
      },
    ],
    username: "Arunoda Susiripala",
    logout: noop,
  },
  parameters: {
    docs: {
      description: {
        component: "Simple footer component",
      },
    },
  },
};

const Template = (args) => {
  const options = generateOptions(10);
  return (
    <Header {...args}>
      <HeaderTopMenu>
        <HeaderTopMenuLinks links={Object.values(args.links)} />
        <HeaderTopMenuUser
          username={args.username}
          onLogout={args.logout}
          dropdown={
            <>
              <HeaderTopMenuUserDropdownItem>
                <HeaderTopMenuUserDropdownItem.Icon>
                  <Plus size={16} />
                </HeaderTopMenuUserDropdownItem.Icon>
                <HeaderTopMenuUserDropdownItem.Text>
                  Spaces
                </HeaderTopMenuUserDropdownItem.Text>
                <HeaderTopMenuUserDropdownItem.Action to="/spaces">
                  manage
                </HeaderTopMenuUserDropdownItem.Action>
                <HeaderTopMenuUserDropdownItem.Menu>
                  <InfiniteDropdown
                    value={null}
                    fetchOptions={console.log}
                    onChange={console.log}
                    options={options}
                    inline={true}
                    withSearch={true}
                    hasNext={false}
                  />
                </HeaderTopMenuUserDropdownItem.Menu>
              </HeaderTopMenuUserDropdownItem>

              <HeaderTopMenuUserDropdownItem>
                <HeaderTopMenuUserDropdownItem.Icon>
                  <GearOutline size={16} />
                </HeaderTopMenuUserDropdownItem.Icon>
                <HeaderTopMenuUserDropdownItem.Text to="/settings">
                  Settings
                </HeaderTopMenuUserDropdownItem.Text>
              </HeaderTopMenuUserDropdownItem>
            </>
          }
        />
      </HeaderTopMenu>
    </Header>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
