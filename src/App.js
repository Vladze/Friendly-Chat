import React, { useState } from "react";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import NotfoundPage from "./pages/Notfound";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";

function App() {
  const isAuth = useSelector((state) => state.isAuth.value);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Navigate replace to="/chat" />} />
        <Route
          path="/chat"
          element={
            <RequireAuth>
              <Chat />
            </RequireAuth>
          }
        />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
