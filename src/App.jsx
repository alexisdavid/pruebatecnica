import { useState } from "react";

import RoutesModule from "./Routes";
import { AppProvider } from "./Context/AppContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <AppProvider>
        <RoutesModule />
      </AppProvider>
    </>
  );
}

export default App;
