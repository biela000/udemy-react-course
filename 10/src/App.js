import React from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  return (
    <React.Fragment>
      <Header />
      {isLoggedIn && <UserProfile />}
      {!isLoggedIn && <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
