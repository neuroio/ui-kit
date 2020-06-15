import React from "react";
import PropTypes from "prop-types";

import { StyledListLayout } from "./StyledListLayout";
import { ListLayoutHeader } from "./ListLayoutHeader";
import { ListLayoutTitle } from "./ListLayoutTitle";
import { ListLayoutButtons } from "./ListLayoutButtons";
import { ListLayoutSearch } from "./ListLayoutSearch";
import { ListLayoutContent } from "./ListLayoutContent";
import { ListLayoutTop } from "./ListLayoutTop";

export const ListLayoutContext = React.createContext();

function ListLayout({ title, buttons, search, actions, content, className }) {
  const hasHeader = title || buttons;
  const hasTop = hasHeader || search;

  const [headerRect, setHeaderRect] = React.useState(null);

  return (
    <ListLayoutContext.Provider value={{ headerRect, setHeaderRect }}>
      <StyledListLayout className={className}>
        {hasTop && (
          <ListLayoutTop>
            {hasHeader && (
              <ListLayoutHeader>
                {title && <ListLayoutTitle level={1}>{title}</ListLayoutTitle>}
                {buttons && <ListLayoutButtons>{buttons}</ListLayoutButtons>}
              </ListLayoutHeader>
            )}
            {search && <ListLayoutSearch>{search}</ListLayoutSearch>}
            {actions && actions}
          </ListLayoutTop>
        )}

        {content && (
          <ListLayoutContent id="list-layout-content">
            {content}
          </ListLayoutContent>
        )}
      </StyledListLayout>
    </ListLayoutContext.Provider>
  );
}

ListLayout.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.element,
  search: PropTypes.element,
  actions: PropTypes.element,
  content: PropTypes.element,
  className: PropTypes.string,
};

export * from "./ListLayoutList";
export * from "./ListLayoutNotice";
export * from "./ListLayoutDetailed";
export * from "./ListLayoutActions";
export { ListLayout };
