import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"

import App from './App'

const Root = ({ store }) => (
  <div className="root">
    <Provider store={ store }>
        <BrowserRouter>
          <>
            <Redirect exact from="/" to="/inbox"/>
            <Route path="/:page" component={App}/>
          </>
        </BrowserRouter>
    </Provider>
  </div>
)

export default Root
