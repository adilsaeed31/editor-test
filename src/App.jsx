import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { GlobalStyle, Nav, Container, H1 } from "./App.style"
import Templates from "./Templates"
import Editor from "./Editor"
import EditorFunc from "./EditorFunc"

const routes = [
  { path: "/", name: "Home", Component: Templates },
  { path: "/new", name: "New", Component: EditorFunc },
  { path: "/edit/:id", name: "Edit", Component: EditorFunc }
]

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />

      <Container>
        <Router>
          <Nav>
            <H1 link>
              <Link to="/">React Email Editor</Link>
            </H1>
          </Nav>

          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {props => (
                <CSSTransition
                  in={props.match != null}
                  timeout={200}
                  classNames="page"
                  unmountOnExit
                >
                  <Switch>
                    <div className="page">
                      <Component {...props} />
                    </div>
                  </Switch>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Router>
      </Container>
    </React.Fragment>
  )
}

export default App
