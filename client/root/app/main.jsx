// Import global npm modules
import React from "react";

// Import local ui modules
import Providers from "./ui/providers";

// Create App main
const App = ({ Component, pageProps }) => {

  // Return jsx
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};


// Export default App main
export default App;