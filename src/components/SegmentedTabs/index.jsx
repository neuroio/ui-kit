import React from "react";
import PropTypes from "prop-types";

import { StyledSegmentedTabs } from "./StyledSegmentedTabs";
import { SegmentedTabsTabbar } from "./SegmentedTabsTabbar";
import { SegmentedTabsSpinner } from "./SegmentedTabsSpinner";
import { TabPanels, TabPanel } from "@reach/tabs";

import { findOptionIndexByValue } from "../../utils";

function SegmentedTabs({
  options,
  defaultActiveTab,
  value,
  onChange,
  "data-testid": testId,
  className,
  renderTab,
  children,
}) {
  return (
    <StyledSegmentedTabs
      defaultIndex={
        defaultActiveTab ? findOptionIndexByValue(options, defaultActiveTab) : 0
      }
      index={value ? findOptionIndexByValue(options, value) : null}
      onChange={(index) => {
        onChange({ activeTab: options[index].value });
      }}
      className={className}
    >
      <SegmentedTabsTabbar options={options} data-testid={`${testId}-tabbar`} />
      <TabPanels data-testid={`${testId}-tabpanels`}>
        {children || options.map((option) => renderTab(option, testId))}
      </TabPanels>
    </StyledSegmentedTabs>
  );
}

SegmentedTabs.propTypes = {
  options: PropTypes.array.isRequired,
  defaultActiveTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
  renderTab: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

SegmentedTabs.defaultProps = {
  renderTab(option, testId) {
    const { value, Component } = option;

    return (
      <TabPanel key={value} data-testid={`${testId}-tabpanel-${value}`}>
        {React.isValidElement(Component) ? Component : <Component />}
      </TabPanel>
    );
  },
};

export { SegmentedTabs, SegmentedTabsTabbar, SegmentedTabsSpinner };
