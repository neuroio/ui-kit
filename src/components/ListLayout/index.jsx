import React from "react";
import PropTypes from "prop-types";

import { StyledListLayout } from "./StyledListLayout";
import { ListLayoutHeader } from "./ListLayoutHeader";
import { ListLayoutTitle } from "./ListLayoutTitle";
import { ListLayoutButtons } from "./ListLayoutButtons";
import { ListLayoutSearch } from "./ListLayoutSearch";
import { ListLayoutContent } from "./ListLayoutContent";
import { ListLayoutTop } from "./ListLayoutTop";

function ListLayout({
  title,
  buttons,
  search,
  actions,
  content,
  className,
  updateDeps,
}) {
  const hasHeader = title || buttons;
  const hasTop = hasHeader || search;

  return (
    <StyledListLayout className={className}>
      {hasTop && (
        <ListLayoutTop updateDeps={updateDeps}>
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
  );
}

ListLayout.propTypes = {
  title: PropTypes.string,
  buttons: PropTypes.element,
  search: PropTypes.element,
  actions: PropTypes.element,
  content: PropTypes.element,
  className: PropTypes.string,
  updateDeps: PropTypes.array,
};

export * from "./ListLayoutList";
export * from "./ListLayoutNotice";
export * from "./ListLayoutDetailed";
export * from "./ListLayoutActions";
export { ListLayout };
