import styled from "styled-components";

import { LazyImage } from "../../../../../LazyImage";

const EntryCardPhotoFullImageImage = styled(LazyImage)`
  border-radius: 6px;
  overflow: hidden;

  img {
    max-width: 800px;
    max-height: 600px;
  }
`;

export { EntryCardPhotoFullImageImage };
