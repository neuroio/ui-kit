import React from "react";
import PropTypes from "prop-types";

import { useLayoutEffect, useState, useEffect } from "react";
import { useLockBodyScroll } from "react-use";
import usePortal from "react-useportal";

import { StyledEntryCardPhotoFullImage } from "./StyledEntryCardPhotoFullImage";
import { EntryCardPhotoFullImageControl } from "./EntryCardPhotoFullImageControl";
import { EntryCardPhotoFullImageModal } from "./EntryCardPhotoFullImageModal";
import { EntryCardPhotoFullImageImage } from "./EntryCardPhotoFullImageImage";
import { EntryCardPhotoFullImageCloseButton } from "./EntryCardPhotoFullImageCloseButton";
import { EntryCardPhotoFullImageSpinner } from "./EntryCardPhotoFullImageSpinner";
import { Fullscreen, TimesDeleteBold } from "../../../../../icons";

function EntryCardPhotoFullImage({ src, "data-testid": testId }) {
  const [openModal, closeModal, isModalOpen, Modal] = usePortal();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useLockBodyScroll(isModalOpen);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [src, isModalOpen]);

  useLayoutEffect(() => {
    const rootComponent = document.getElementById("root");

    if (isModalOpen) {
      rootComponent.style.filter = "blur(12px)";
      rootComponent.style.opacity = "0.4";
    } else {
      rootComponent.style.filter = null;
      rootComponent.style.opacity = null;
    }
  }, [isModalOpen]);

  return (
    <>
      <StyledEntryCardPhotoFullImage>
        <EntryCardPhotoFullImageControl
          onClick={openModal}
          data-testid={`${testId}-control`}
        >
          <Fullscreen size={16} />
        </EntryCardPhotoFullImageControl>
      </StyledEntryCardPhotoFullImage>
      {isModalOpen && (
        <Modal>
          <EntryCardPhotoFullImageModal isVisible={isImageLoaded}>
            <EntryCardPhotoFullImageImage
              src={src}
              data-testid={`${testId}-image`}
              onLoad={() => {
                setIsImageLoaded(true);
              }}
            />
          </EntryCardPhotoFullImageModal>
          {!isImageLoaded && <EntryCardPhotoFullImageSpinner />}
          <EntryCardPhotoFullImageCloseButton
            onClick={closeModal}
            data-testid={`${testId}-close-button`}
            fit="circle"
          >
            <TimesDeleteBold size={12} />
          </EntryCardPhotoFullImageCloseButton>
        </Modal>
      )}
    </>
  );
}

EntryCardPhotoFullImage.propTypes = {
  src: PropTypes.string.isRequired,
  "data-testid": PropTypes.string.isRequired,
};

export { EntryCardPhotoFullImage };
