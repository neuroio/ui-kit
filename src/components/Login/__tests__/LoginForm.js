import React from "react";

import { fireEvent, waitFor } from "@testing-library/react";
import { render } from "../../../../test/utils";

import { LoginForm } from "../LoginForm";

describe("LoginForm tests", () => {
  const loginMock = jest.fn();
  const authErrorMock = null;

  afterEach(() => {
    loginMock.mockClear();
  });

  function renderLoginForm(props) {
    return render(
      <LoginForm
        login={loginMock}
        authError={authErrorMock}
        isLogging={false}
        {...props}
      />
    );
  }

  test("LoginForm submits with correct data", async () => {
    const { getByPlaceholderText, getByTestId } = renderLoginForm();

    fireEvent.change(getByPlaceholderText("username"), {
      target: { value: "Jane Doe" },
    });

    fireEvent.change(getByPlaceholderText("password"), {
      target: { value: "strong_password_here" },
    });

    fireEvent.submit(getByTestId("login-form"));

    await waitFor(() => {
      expect(loginMock.mock.calls).toEqual([
        [{ username: "Jane Doe", password: "strong_password_here" }],
      ]);
    });
  });

  test("LoginForm does not call login when data is not valid", async () => {
    const { getByTestId } = renderLoginForm();

    fireEvent.submit(getByTestId("login-form"));

    await waitFor(() => {
      expect(loginMock.mock.calls).toEqual([]);
    });
  });

  test("LoginForm renders validation errors", async () => {
    const { getByTestId } = renderLoginForm();

    fireEvent.submit(getByTestId("login-form"));

    await waitFor(() => {
      expect(getByTestId("login-form-error").innerHTML).toEqual(
        "Required fields are empty"
      );
    });
  });
});
