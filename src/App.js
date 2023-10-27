import { Children, reverse } from "react";
import Card from "./components/Card";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Card reverse={reverse}>
                <section>
                  
                </section>
              </Card>
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Card children={Children}>
              <section>
                <LoginForm />
              </section>
            </Card>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
