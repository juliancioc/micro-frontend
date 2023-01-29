import React, { Suspense } from "react"
import HelloVueApp from "./components/HelloVueApp"

const RemoteApp = React.lazy(() => import("app2_react/App"))

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "green",
          color: "white",
        }}
      >
        <h1>Container React App</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <HelloVueApp />
      </Suspense>
    </div>
  )
}

export default App
