import React from "react";

import { useState, useMemo } from "react";

import { render } from "../../../../../../test/utils";
import { generateOptions } from "../../../../../../test/generate";
import { fireEvent } from "@testing-library/react";

import { FormFromToPicker } from "../index.jsx";
import { FormDropdown } from "../../FormDropdown";

describe("FormFromToPicker tests", () => {
  const onChangeMock = jest.fn();
  const onResetMock = jest.fn();
  const onStateChangeMock = jest.fn();

  afterEach(() => {
    onChangeMock.mockClear();
    onResetMock.mockClear();
    onStateChangeMock.mockClear();
  });
  afterAll(() => {
    onChangeMock.mockReset();
    onResetMock.mockReset();
    onStateChangeMock.mockReset();
  });

  const testId = "form-from-to-picker";
  function getComponentTestId(component) {
    return `${testId}-${component}`;
  }

  const options = generateOptions(10);

  function FormFromToPickerConsumer(props) {
    const [value, setValue] = useState([null, null]);

    const items = useMemo(
      () => [
        {
          label: "From",
          value: "from",
          Component: (
            <FormDropdown
              value={value[0]}
              onChange={(selected) => {
                setValue([selected, value[1]]);
                onChangeMock([selected, value[1]]);
              }}
              options={options}
              data-testid={testId}
              inline={true}
            />
          ),
        },
        {
          label: "To",
          value: "to",
          Component: (
            <FormDropdown
              value={value[1]}
              onChange={(selected) => {
                setValue([value[0], selected]);
                onChangeMock([value[0], selected]);
              }}
              options={options}
              data-testid={testId}
              inline={true}
            />
          ),
        },
      ],
      [value, setValue]
    );

    const defaultProps = {
      valuesOnReset: [null, null],
      onReset: onResetMock,
      onStateChange: onStateChangeMock,
      "data-testid": testId,
      value,
      onChange: (value) => {
        setValue(value);
        onChangeMock(value);
      },
    };

    return (
      <FormFromToPicker {...defaultProps} {...props}>
        <FormFromToPicker.Tabs items={items} data-testid={testId} />
      </FormFromToPicker>
    );
  }

  function getDefaultFormFromToPicker(props) {
    return render(<FormFromToPickerConsumer {...props} />);
  }

  function renderFormFromToPicker(props) {
    return getDefaultFormFromToPicker(props);
  }

  test("FormFromToPicker should open and close popup correctly", () => {
    const { getByTestId } = renderFormFromToPicker();

    expect(getByTestId(getComponentTestId("popup"))).not.toBeVisible();

    fireEvent.click(getByTestId(getComponentTestId("control")));
    expect(getByTestId(getComponentTestId("popup"))).toBeVisible();

    fireEvent.click(getByTestId(getComponentTestId("control")));
    expect(getByTestId(getComponentTestId("popup"))).not.toBeVisible();
  });

  test("FormFromToPicker should call onChange correctly on FROM and TO values select", () => {
    const { getByTestId } = renderFormFromToPicker();

    const fromOption = options[0];
    const toOption = options[0];

    fireEvent.click(getByTestId(getComponentTestId("control")));

    fireEvent.click(getByTestId(getComponentTestId("from")));
    fireEvent.click(
      getByTestId(getComponentTestId(`option-${fromOption.value}`))
    );

    fireEvent.click(getByTestId(getComponentTestId("to")));
    fireEvent.click(
      getByTestId(getComponentTestId(`option-${toOption.value}`))
    );

    expect(onChangeMock.mock.calls).toEqual([
      [[fromOption, null]],
      [[fromOption, toOption]],
    ]);
  });

  test("FormFromToPicker should reset value to resetValues on reset click", () => {
    const valuesOnReset = [null, null];
    const fromOption = options[0];
    const toOption = options[0];

    const { getByTestId } = renderFormFromToPicker({
      valuesOnReset,
    });

    fireEvent.click(getByTestId(getComponentTestId("control")));

    fireEvent.click(getByTestId(getComponentTestId("from")));
    fireEvent.click(
      getByTestId(getComponentTestId(`option-${fromOption.value}`))
    );

    fireEvent.click(getByTestId(getComponentTestId("to")));
    fireEvent.click(
      getByTestId(getComponentTestId(`option-${toOption.value}`))
    );
    onChangeMock.mockClear();

    fireEvent.click(getByTestId(getComponentTestId("reset")));

    expect(onChangeMock.mock.calls).toEqual([[valuesOnReset]]);
  });
});
