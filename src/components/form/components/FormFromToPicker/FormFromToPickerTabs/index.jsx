import React from "react";

import PropTypes from "prop-types";

import { Tabs } from "../../../../Tabs";
import { FormFromToPickerTabsTabbar } from "./FormFromToPickerTabsTabbar";
import { FormFromToPickerTabsInner } from "./FormFromToPickerTabsInner";
import { StyledFormFromToPickerTabs } from "./StyledFormFromToPickerTabs";

const { TabPanes, TabPane } = Tabs;

function FormFromToPickerTabs({ items, defaultActiveTab }) {
  return (
    <StyledFormFromToPickerTabs>
      <Tabs defaultActiveTab={defaultActiveTab || (items[0] && items[0].value)}>
        <FormFromToPickerTabsTabbar items={items} />
        <FormFromToPickerTabsInner>
          <TabPanes>
            {items.map(({ value, Component }) => {
              return (
                <TabPane
                  key={value}
                  id={value}
                  render={(props) =>
                    // eslint-disable-next-line react/prop-types
                    props.isActive && Component
                  }
                />
              );
            })}
          </TabPanes>
        </FormFromToPickerTabsInner>
      </Tabs>
    </StyledFormFromToPickerTabs>
  );
}

FormFromToPickerTabs.propTypes = {
  items: PropTypes.array.isRequired,
  defaultActiveTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { FormFromToPickerTabs };
