import { GlobalStyles, I18nProvider } from "../src/components";
import { Normalize } from "styled-normalize";
import { MemoryRouter } from "react-router";

const withProvider = (Story, context) => (
  <MemoryRouter>
    <I18nProvider>
      <div
        style={{
          padding: 16,
          maxWidth: 940,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Normalize />
        <GlobalStyles />
        <Story {...context} />
      </div>
    </I18nProvider>
  </MemoryRouter>
);

export const decorators = [withProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
