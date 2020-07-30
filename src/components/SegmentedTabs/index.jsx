import React from "react";
import PropTypes from "prop-types";

import { StyledSegmentedTabs } from "./StyledSegmentedTabs";
import { SegmentedTabsTabbar } from "./SegmentedTabsTabbar";
import { SegmentedTabsSpinner } from "./SegmentedTabsSpinner";
import { Switch, Route } from "react-router-dom";
import { Tabs } from "../Tabs";
const { TabPanes, TabPane } = Tabs;

function SegmentedTabs({
  options,
  defaultActiveTab,
  value,
  onChange,
  "data-testid": testId,
  className,
  renderTab,
  children,
  routed,
}) {
  const TabsWrapper = routed ? Switch : TabPanes;

  return (
    <StyledSegmentedTabs className={className}>
      <Tabs
        defaultActiveTab={defaultActiveTab}
        value={value}
        onChange={onChange}
      >
        <SegmentedTabsTabbar
          options={options}
          data-testid={`${testId}-tabbar`}
        />
        <TabsWrapper>{children || options.map(renderTab, routed)}</TabsWrapper>
      </Tabs>
    </StyledSegmentedTabs>
  );
}

SegmentedTabs.propTypes = {
  options: PropTypes.array.isRequired,
  defaultActiveTab: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  "data-testid": PropTypes.string,
  className: PropTypes.string,
  renderTab: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  routed: PropTypes.bool,
};

SegmentedTabs.defaultProps = {
  renderTab(option, routed) {
    const { value, to, Component } = option;

    return routed ? (
      <Route exact path={to} component={Component} />
    ) : (
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
