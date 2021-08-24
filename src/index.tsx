import React from "react"
import ReactDOM from "react-dom"
import { QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { ReactQueryDevtools } from "react-query/devtools"

import { queryClient } from "./const"
import { store } from "./store"

// import { Example1 } from "./Example1"
import { Example2 } from "./Example2"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <Example1 /> */}
        <Example2 />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)
