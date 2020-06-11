import React from "react";
import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Header, HeaderTopMenu } from "./index.jsx";
import { HeaderTopMenuLinks, HeaderTopMenuUser } from "./HeaderTopMenu";

storiesOf("Navigation|Header", module).add("default", () => {
  const username = text("Username", "Arunoda Susiripala");

  const topLinks = object("Top links", [
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
  ]);

  return (
    <Header>
      <HeaderTopMenu>
        <HeaderTopMenuLinks links={Object.values(topLinks)} />
        <HeaderTopMenuUser username={username} onLogout={action("Logout")} />
      </HeaderTopMenu>
    </Header>
  );
});
