import React from "react";

import { storiesOf } from "@storybook/react";
import { select, number, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { EntryPersonCard } from "./index.jsx";
import { EntryCardActionsButton, EntryCardButtonDelete } from "../components";

import { entryMock, personMock } from "../../../../test/__mocks__";

storiesOf("Entries/EntryPersonCard", module).add("default", () => {
  const result = select(
    "Conf",
    ["new", "reinit", "exact", "ha", "junk", "nm", "det"],
    "exact"
  );
  const liveness = select(
    "Liveness",
    ["failed", "passed", "undetermined"],
    "failed"
  );
  const theme = select("theme", ["light", "dark"], "light");
  const deleted = boolean("Deleted", false);
  const entry = { ...entryMock, result, liveness, deleted };
  const person = { ...personMock, reinit: number("Reinit count", 0) };
  const resultsWithDelete = ["exact", "junk", "ha"];
  /**
   * Если персона не была реиничена ранее (reinit === 0),
   * то не имеет смысла давать возможность реинита на new
   */
  const resultsWithReinit = ["exact", "junk", "ha"].concat(
    person.reinit > 0 ? ["new"] : []
  );

  const isDeleteble =
    resultsWithDelete.includes(entry.result) && !entry.deleted;
  const isReinitable = resultsWithReinit.includes(entry.result);

  return (
    <EntryPersonCard
      entry={entry}
      onClick={action("Click")}
      theme={theme}
      actions={
        !entry.deleted && (
          <React.Fragment>
            {isReinitable && (
              <EntryCardActionsButton
                onClick={() => action("Reinit")(entry.id)}
              >
                reinit
              </EntryCardActionsButton>
            )}
            {isDeleteble && (
              <EntryCardButtonDelete
                onDelete={() => action("Delete")(entry.id)}
              >
                delete
              </EntryCardButtonDelete>
            )}
          </React.Fragment>
        )
      }
    />
  );
});
