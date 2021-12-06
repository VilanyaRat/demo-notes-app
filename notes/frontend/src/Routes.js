import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/login" element={<UnauthenticatedRoute><Login /></UnauthenticatedRoute>} />
      <Route exact path="/signup" element={<UnauthenticatedRoute><Signup /></UnauthenticatedRoute>} />
      {/* <UnauthenticatedRoute exact path="/signup" element={<Signup />} /> */}
      <Route exact path="/notes/new" element={<AuthenticatedRoute><NewNote /></AuthenticatedRoute>} />
      {/* <UnauthenticatedRoute exact path="/notes/new" element={<NewNote />} /> */}
      <Route exact path="/notes/:id" element={<AuthenticatedRoute><Notes /></AuthenticatedRoute>} />
      {/* <UnauthenticatedRoute exact path="/notes/:id" element={<Notes />} /> */}
      <Route exact path="/settings" element={<AuthenticatedRoute><Settings /></AuthenticatedRoute>} />
      {/* <UnauthenticatedRoute exact path="/settings" element={<Settings />} /> */}

      {/* Finally, catch all unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}