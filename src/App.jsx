import { Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm";
// import NavBar from "./Navbar";
import Header from "./header";
import HeaderMenu from "./headerMenu";
import NavBar from "./Navbar";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
          </>
        }
      />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
