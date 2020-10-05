import styled from "styled-components";

import { TabPanel } from "@reach/tabs";

const SegmentedTabsPanel = styled(TabPanel)`
  :not([hidden]) {
    display: flex;
    flex-direction: column;
    flex: 100%;
  }
`;

export { SegmentedTabsPanel };
