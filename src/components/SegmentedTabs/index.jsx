import React from "react";
import PropTypes from "prop-types";

import { StyledSegmentedTabs } from "./StyledSegmentedTabs";
import { SegmentedTabsTabbar } from "./SegmentedTabsTabbar";
import { SegmentedTabsSpinner } from "./SegmentedTabsSpinner";
import { Tabs } from "../Tabs";
const { TabPanes, TabPane } = Tabs;

function SegmentedTabs({
  options,
  defaultActiveTab,
  onChange,
  "data-testid": testId,
  className,
  renderTab,
  children,
}) {
  return (
    <StyledSegmentedTabs className={className}>
      <Tabs defaultActiveTab={defaultActiveTab} onChange={onChange}>
        <SegmentedTabsTabbar
          options={options}
          data-testid={`${testId}-tabbar`}
        />
        <TabPanes>{children || options.map(renderTab)}</TabPanes>
      </Tabs>
    </StyledSegmentedTabs>
  );
}

SegmentedTabs.propTypes = {
  options: PropTypes.array.isRequired,
  defaultActiveTab: PropTypes.string,
  onChange: PropTypes.func,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
  renderTab: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

SegmentedTabs.defaultProps = {
  renderTab(option) {
    const { value, Component } = option;

    return (
      <TabPane
        id={value}
        key={value}
        // eslint-disable-next-line react/prop-types
        render={(props) => props.isActive && <Component {...props} />}
      />
    );
  },
};

export { SegmentedTabs, SegmentedTabsTabbar, SegmentedTabsSpinner };
