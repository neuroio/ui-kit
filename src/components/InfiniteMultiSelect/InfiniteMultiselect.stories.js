import React from "react";
import { useState } from "react";
import { InfiniteMultiSelect } from "./index";
import { fetchPokemons } from "../../../test/api";

export default {
  title: "Controls/InfiniteMultiSelect",
  component: InfiniteMultiSelect,
  argTypes: {},
  args: {
    ...InfiniteMultiSelect.defaultProps,
  },
  parameters: {
    docs: {
      description: {
        component: "Simple controlled infinite multiselect component",
      },
    },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState([]);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <InfiniteMultiSelect
      {...args}
      hasNext={hasNext}
      fetchOptions={async (params) => {
        setLoading(true);

        const { data } = await fetchPokemons({
          search: params.q,
          limit: params.limit,
          offset: params.offset,
        });

        setOptions((options) => {
          const newOptions = data.results.map(({ name, url }) => ({
            label: name,
            value: url,
          }));

          if (params.meta.clearList) {
            return newOptions;
          }

          return options.concat(newOptions);
        });
        setHasNext(Boolean(data.next));
        setLoading(false);
      }}
      placeholder={loading ? "loading..." : "select character"}
      isFetching={loading}
      options={options}
      value={selected}
      onChange={(value) => {
        setSelected(value);
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithSearch = Template.bind({});
WithSearch.args = {
  withSearch: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};
