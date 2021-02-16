import React from "react";
import { Footer } from "./index.jsx";
import { TextBold } from "../../components/Text/TextBold";
import { TextThin } from "../../components/Text/TextThin";

export default {
  title: "Layout/Footer",
  component: Footer,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component: "Simple footer component",
      },
    },
  },
};

const Template = (args) => {
  return (
    <Footer
      {...args}
      Disclamer={
        <React.Fragment>
          <p>
            s Your data is safe, as we’re GDPR (regulation (EU) 2016/679)
            compliant. The cloud does not keep any data except for fully
            impersonalized, in the database. All data is kept on servers in EU.
          </p>
          <span>© {new Date().getFullYear()} DATA CORPORATION OÜ, ESTONIA</span>
        </React.Fragment>
      }
      Credits={
        <React.Fragment>
          <TextBold>Neuroio.one Cloud Platform</TextBold>
          <br />
          <TextThin>API v1.13, frontend v2.1.2</TextThin>
        </React.Fragment>
      }
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};
