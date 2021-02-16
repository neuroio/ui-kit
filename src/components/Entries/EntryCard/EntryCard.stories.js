import React from "react";
import { entryMock } from "../../../../test/__mocks__";
import { EntryCard } from "./index.jsx";
import { EntryCardButtonDelete } from "../components";
import { noop } from "lodash-es";

export default {
  title: "Entries/EntryCard",
  component: EntryCard,
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
    onDelete: noop,
  },
  parameters: {
    docs: {
      description: {
        component: "Use this card to show entry info",
      },
    },
  },
};

const Template = (args) => {
  const { entry } = args;
  const resultsWithDelete = ["new", "exact", "junk", "ha", "nm", "det"];
  const isDeleteble =
    resultsWithDelete.includes(args.entryResult) && !args.entryDeleted;

  return (
    <EntryCard
      {...args}
      entry={{
        ...args.entry,
        result: args.entryResult,
        liveness: args.entryLiveness,
        deleted: args.entryDeleted,
      }}
      actions={
        isDeleteble && (
          <React.Fragment>
            <EntryCardButtonDelete onDelete={args.onDelete(entry.id)}>
              delete
            </EntryCardButtonDelete>
          </React.Fragment>
        )
      }
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};
