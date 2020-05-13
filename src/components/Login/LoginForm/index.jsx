import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect, useRef } from "react";
import { usePrevious } from "react-use";

import { object, string } from "yup";

import { StyledLoginForm } from "./StyledLoginForm";
import { LoginFormFields } from "./LoginFormFields";
import { LoginFormError } from "./LoginFormError";
import { Button } from "../../Button";
import { FormField, FormInput } from "../../form/components";

import { withFormik } from "formik";
import { isEmpty } from "lodash-es";

const ERROR_EMPTY_FIELDS = "Required fields are empty";

function LoginFormComponent({
  isLogging,
  authError,
  values,
  errors,
  setErrors,
  submitForm,
  resetForm,
  className,
  submitCount,
  "data-testid": testId,
}) {
  const [stateAuthError, setStateAuthError] = useState(null);
  const [authErrorResetTimerId, setAuthErrorResetTimerId] = useState(null);
  const usernameInputRef = useRef();
  const prevStateAuthError = usePrevious(stateAuthError);
  const prevValues = usePrevious(values);
  const prevIsLogging = usePrevious(isLogging);

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (authError) {
      setStateAuthError(authError);
    } else {
      if (
        prevStateAuthError !== ERROR_EMPTY_FIELDS &&
        !isEmpty(errors) &&
        !authErrorResetTimerId
      ) {
        setStateAuthError(ERROR_EMPTY_FIELDS);
      }

      if (stateAuthError && prevStateAuthError !== stateAuthError) {
        setAuthErrorResetTimerId(setTimeout(clearAuthError, 2000));
      }

      if (values !== prevValues) {
        setErrors({});
      }

      if (prevIsLogging && !isLogging) {
        resetForm();
        if (usernameInputRef.current) {
          usernameInputRef.current.focus();
        }
      }
    }
  }, [authError, errors, submitCount, stateAuthError]);

  function clearAuthError() {
    clearTimeout(authErrorResetTimerId);

    setStateAuthError(null);
    setAuthErrorResetTimerId(null);
  }

  function handleFormSubmit(ev) {
    ev.preventDefault();
    submitForm();
  }

  return (
    <StyledLoginForm
      onSubmit={handleFormSubmit}
      data-testid={testId}
      className={className}
    >
      <LoginFormFields>
        <FormField
          name="username"
          showError={false}
          placeholder="username"
          render={(props) => <FormInput {...props} ref={usernameInputRef} />}
        />
        <FormField
          name="password"
          showError={false}
          placeholder="password"
          component={FormInput.Password}
        />
        <LoginFormError data-testid="login-form-error">
          {stateAuthError}
        </LoginFormError>
      </LoginFormFields>
      <Button type="submit" theme="dark" size="large">
        Login
      </Button>
    </StyledLoginForm>
  );
}

LoginFormComponent.propTypes = {
  title: PropTypes.string,
  logoSrc: PropTypes.string,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  login: PropTypes.func.isRequired,
  isLogging: PropTypes.bool.isRequired,
  authError: PropTypes.object,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  setErrors: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitCount: PropTypes.number.isRequired,
};

LoginFormComponent.defaultProps = {
  "data-testid": "login-form",
};

const LoginForm = withFormik({
  mapPropsToValues: function () {
    return { username: "", password: "" };
  },
  validateOnBlur: false,
  validateOnChange: false,
  validationSchema: object({
    username: string().required(),
    password: string().required(),
  }),
  handleSubmit: function (values, { props }) {
    props.login(values);
  },
})(LoginFormComponent);

export { LoginForm, LoginFormComponent };
