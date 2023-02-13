// Import global npm modules
import React from "react";
import { Provider } from "jotai";

// Import client proveders modules
import Swr from "#/providers/swr";
import Theme from "#/providers/theme";

// Create Providers ui
const Providers = ({ children }) => {
  // Return jsx
  return (
    <Provider>
      <Swr>
        <Theme>{children}</Theme>
      </Swr>
    </Provider>
  );
};

// Export default Providers ui
export default Providers;