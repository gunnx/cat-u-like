import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Upload from "./components/Upload";
import "./index.css";
import styled from "styled-components";

const Wrapper = styled.main`
  margin: 1rem auto;
  padding: 2rem;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
