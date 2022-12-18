import { useState } from "react";
import GlobalStyles from "./styles/global";
import { MainProvider } from "./hooks/useMain";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <MainProvider>
        <GlobalStyles />
        <SideBar />
        <Content />
      </MainProvider>
    </div>
  );
}

export default App;
