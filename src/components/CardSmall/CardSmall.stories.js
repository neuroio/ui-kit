import { CardSmall } from "./index";

import { personMock } from "../../../test/__mocks__";
import { PlaylistAdd } from "../icons";
import { colors } from "../../style";

import React from "react";
import { useState } from "react";

export default {
  title: "Data Display/CardSmall",
  component: CardSmall,
  argTypes: {},
  args: {},
};

const Template = (args) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { theme } = args;

  return (
    <CardSmall
      {...args}
      theme={theme}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <CardSmall.Data>
        <CardSmall.DataItem>
          Some key: <b>some value</b>
        </CardSmall.DataItem>
        <CardSmall.DataItem>
          Some key: <b>some value</b>
        </CardSmall.DataItem>
      </CardSmall.Data>

      {(isSelected || theme === "dark" || isMouseOver) && (
        <CardSmall.Checkbox
          name={personMock.pid}
          checked={isSelected}
          onChange={() => setIsSelected(!isSelected)}
        />
      )}

      {isMouseOver && (
        <CardSmall.Button>
          <PlaylistAdd size="24" color={colors.bloodOrange} />
        </CardSmall.Button>
      )}
    </CardSmall>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  img: personMock.initial_face_image,
};

export const NoImage = Template.bind({});
NoImage.args = {};
