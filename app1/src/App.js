import React, { Suspense } from "react"

const RemoteApp = React.lazy(() => import("app2/App"))
const RemoteApp3 = React.lazy(() => import("app3/App"))

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "green",
          color: "white"
        }}
      >
        <h1>Navbar</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <RemoteApp3 />
      </Suspense>
    </div>
  )
}

export default App
