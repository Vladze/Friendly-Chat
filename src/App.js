import React, { useState } from "react";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return <div className="wrapper">{isAuthorized ? <Chat /> : <Auth />}</div>;
}

export default App;
