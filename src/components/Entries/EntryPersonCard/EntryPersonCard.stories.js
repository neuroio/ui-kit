import React from "react";

import { EntryPersonCard } from "./index.jsx";
import { EntryCardActionsButton, EntryCardButtonDelete } from "../components";

import { entryMock } from "../../../../test/__mocks__";
import { noop } from "lodash-es";

export default {
  title: "Entries/EntryPersonCard",
  component: EntryPersonCard,
  argTypes: {
    entryResult: {
      control: {
        type: "select",
        options: ["new", "reinit", "exact", "ha", "junk", "nm", "det"],
      },
    },
    entryLiveness: {
      control: {
        type: "select",
        options: ["failed", "passed", "undetermined"],
      },
    },
    entryDeleted: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    entry: entryMock,
    entryResult: "new",
    entryLiveness: "passed",
    entryDeleted: false,
    reinitCount: 0,
    onReinit: noop,
    onDelete: noop,
  },
  parameters: {
    docs: {
      description: {
        component: "Use this card to show entry info without person info",
      },
    },
  },
};

const Template = (args) => {
  const { entry } = args;
  const resultsWithDelete = ["exact", "junk", "ha"];
  const isDeleteble =
    resultsWithDelete.includes(args.entryResult) && !args.entryDeleted;
  const resultsWithReinit = ["exact", "junk", "ha"].concat(
    args.reinitCount > 0 ? ["new"] : []
  );
  const isReinitable = resultsWithReinit.includes(args.entryResult);

  return (
    <EntryPersonCard
      {...args}
      entry={{
        ...args.entry,
        result: args.entryResult,
        liveness: args.entryLiveness,
        deleted: args.entryDeleted,
      }}
      actions={
        !entry.deleted && (
          <React.Fragment>
            {isReinitable && (
              <EntryCardActionsButton
                onClick={args.onReinit(entry.id)}
                theme="light"
              >
                reinit
              </EntryCardActionsButton>
            )}
            {isDeleteble && (
              <EntryCardButtonDelete onDelete={args.onDelete(entry.id)}>
                delete
              </EntryCardButtonDelete>
            )}
          </React.Fragment>
        )
      }
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};
