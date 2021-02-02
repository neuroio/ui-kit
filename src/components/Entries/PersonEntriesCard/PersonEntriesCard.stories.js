import React from "react";
import { EntryCardActionsButton, EntryCardButtonDelete } from "../components";
import { PersonEntriesCard } from "./index.jsx";
import { personMock } from "../../../../test/__mocks__";
import { noop } from "lodash-es";

export default {
  title: "Entries/PersonEntriesCard",
  component: PersonEntriesCard,
  argTypes: {},
  args: {
    person: personMock,
    onDelete: noop,
    reinitCount: 0,
  },
  parameters: {
    docs: {
      description: {
        component: "Use this card to show person info",
      },
    },
  },
};

const Template = (args) => {
  return (
    <PersonEntriesCard
      {...args}
      person={{ ...args.person, reinit: args.reinitCount }}
      actions={
        <React.Fragment>
          <EntryCardActionsButton theme="light">close</EntryCardActionsButton>
          <EntryCardActionsButton theme="light">lists</EntryCardActionsButton>
          <EntryCardButtonDelete
            onDelete={() => args.onDelete(args.person.pid)}
          >
            delete
          </EntryCardButtonDelete>
        </React.Fragment>
      }
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};
