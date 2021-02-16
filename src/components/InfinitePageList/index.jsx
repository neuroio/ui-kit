import React from "react";
import PropTypes from "prop-types";

import { useRef, useState, useEffect } from "react";

import { InfiniteScroll } from "../InfiniteScroll";

function InfinitePageList({
  children,
  hasNext,
  lockScroll,
  changeOffset,
  offset,
  limit,
  isFetching,
  pageRef,
  fetchNext,
}) {
  const [isListEnds, setIsListEnds] = useState(!hasNext);
  useEffect(() => {
    setIsListEnds(!hasNext);
  }, [hasNext]);

  const windowRef = useRef(window);

  function localFetchNext() {
    if (!isListEnds && !lockScroll) {
      changeOffset(offset + limit);
    }
  }

  return (
    <InfiniteScroll
      onScrollToPoint={fetchNext || localFetchNext}
      scrollerRef={pageRef || windowRef}
      isFetching={isFetching}
    >
      {children}
    </InfiniteScroll>
  );
}

InfinitePageList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  hasNext: PropTypes.bool,
  lockScroll: PropTypes.bool,
  changeOffset: PropTypes.func,
  offset: PropTypes.number,
  limit: PropTypes.number,
  isFetching: PropTypes.bool.isRequired,
  fetchNext: PropTypes.func,
  pageRef: PropTypes.object,
};

export { InfinitePageList };
