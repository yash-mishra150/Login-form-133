import { Children } from "react";
import Card from "./components/Card";
import RegisterCard from "./components/RegisterCard";
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
            <section>
            <RegisterCard />
            </section>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Card children={Children}>
                <LoginForm />
            </Card>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
