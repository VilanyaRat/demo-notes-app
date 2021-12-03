import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/signup" element={<Signup />} />

      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}