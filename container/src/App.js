import React, { Suspense } from "react";

import "./App.css"

import HelloVueApp from "./components/HelloVueApp";
const RemoteApp = React.lazy(() => import("app2_react/App"));

const App = () => {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "green",
        color: "white",
        height: "100vh",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h1>Microfrontend - Container React App</h1>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <HelloVueApp />
      </Suspense>
    </div>
  );
};

export default App;
