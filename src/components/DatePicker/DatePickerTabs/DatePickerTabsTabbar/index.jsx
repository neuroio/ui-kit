import React from "react";

import { useTranslation } from "../../../../hooks";
import { useContext } from "react";
import { TabsContext } from "../../../../components/Tabs";
import { DatePickerContext } from "../../index";

import { StyledDatePickerTabsTabbar } from "./StyledDatePickerTabsTabbar";
import { DatePickerTabsTabbarButton } from "./DatePickerTabsTabbarButton";

function DatePickerTabsTabbar() {
  const { openTab, activeTab } = useContext(TabsContext);
  const { testId } = useContext(DatePickerContext);
  const { t } = useTranslation("DatePicker");

  return (
    <StyledDatePickerTabsTabbar>
      <DatePickerTabsTabbarButton
        data-testid={`${testId}-absolute`}
        isActive={activeTab === "absolute"}
        onClick={() => {
          openTab("absolute");
        }}
      >
        {t("Absolute")}
      </DatePickerTabsTabbarButton>
      <DatePickerTabsTabbarButton
        data-testid={`${testId}-relative`}
        isActive={activeTab === "relative"}
        onClick={() => {
          openTab("relative");
        }}
      >
        {t("Relative")}
      </DatePickerTabsTabbarButton>
    </StyledDatePickerTabsTabbar>
  );
}

export { DatePickerTabsTabbar };
