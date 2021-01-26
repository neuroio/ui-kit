import { GlobalStyles, I18nProvider } from "../src/components";
import { Normalize } from "styled-normalize";

const withProvider = (Story, context) => (
  <I18nProvider>
    <div style={{ padding: 16, maxWidth: 940 }}>
      <Normalize />
      <GlobalStyles />
      <Story {...context} />
    </div>
  </I18nProvider>
);

export const decorators = [withProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
