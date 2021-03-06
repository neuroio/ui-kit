import React from "react";
import PropTypes from "prop-types";

import { useInfiniteMenu } from "../../hooks";

import { InfiniteScroll } from "../index";
import { FormDropdown } from "../form/components";

function InfiniteDropdown({
  value,
  onChange,
  options,
  fetchOptions,
  isFetching,
  disabled,
  hasNext,
  limit,
  placeholder,
  "data-testid": testId,
  name,
  className,
  renderItem,
  withSearch,
  width,
  multiple,
  inline,
  onStateChange,
  renderSelected,
  emptyNotice,
}) {
  const { searchOptions, fetchNext } = useInfiniteMenu({
    limit,
    hasNext,
    isFetching,
    fetchOptions,
  });

  return (
    <InfiniteScroll onScrollToPoint={fetchNext} isFetching={isFetching}>
      {({ scrollerRef }) => (
        <FormDropdown
          className={className}
          withSearch={withSearch}
          value={value}
          options={options}
          onChange={onChange}
          data-testid={testId}
          name={name}
          onInputChange={searchOptions}
          listRef={scrollerRef}
          placeholder={placeholder}
          renderItem={renderItem}
          width={width}
          multiple={multiple}
          inline={inline}
          onStateChange={onStateChange}
          renderSelected={renderSelected}
          isFetching={isFetching}
          disabled={disabled}
          emptyNotice={emptyNotice}
          hasNext={hasNext}
        />
      )}
    </InfiniteScroll>
  );
}

InfiniteDropdown.Option = FormDropdown.Option;
InfiniteDropdown.Menu = FormDropdown.Menu;

const optionShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

InfiniteDropdown.propTypes = {
  value: PropTypes.oneOfType([
    optionShape,
    PropTypes.arrayOf(optionShape),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  onChange: PropTypes.func.isRequired,
  fetchOptions: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  hasNext: PropTypes.bool,
  limit: PropTypes.number.isRequired,
  "data-testid": PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  renderItem: PropTypes.func,
  withSearch: PropTypes.bool,
  multiple: PropTypes.bool,
  inline: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onStateChange: PropTypes.func,
  renderSelected: PropTypes.func,
  emptyNotice: PropTypes.string,
};

InfiniteDropdown.defaultProps = {
  multiple: false,
  inline: false,
  limit: 10,
};

export { InfiniteDropdown };
