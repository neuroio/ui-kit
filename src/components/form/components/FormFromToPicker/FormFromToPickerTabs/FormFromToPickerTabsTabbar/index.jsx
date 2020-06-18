import React from "react";

import PropTypes from "prop-types";

import { useContext } from "react";
import { TabsContext } from "../../../../../Tabs";

import { StyledFormFromToPickerTabsTabbar } from "./StyledFormFromToPickerTabsTabbar";
import { FormFromToPickerTabsTabbarButton } from "./FormFromToPickerTabsTabbarButton";

function FormFromToPickerTabsTabbar({ items }) {
  const { openTab, activeTab } = useContext(TabsContext);

  return (
    <StyledFormFromToPickerTabsTabbar>
      {items.map(({ label, value }) => {
        return (
          <FormFromToPickerTabsTabbarButton
            key={value}
            data-testid={value}
            isActive={activeTab === value}
            onClick={() => {
              openTab(value);
            }}
          >
            {label}
          </FormFromToPickerTabsTabbarButton>
        );
      })}
    </StyledFormFromToPickerTabsTabbar>
  );
}

FormFromToPickerTabsTabbar.propTypes = {
  items: PropTypes.array.isRequired,
};

export { FormFromToPickerTabsTabbar };
