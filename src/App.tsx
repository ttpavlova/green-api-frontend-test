import { useState } from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HomePage } from "./pages/HomePage/HomePage";
import type { Credentials } from "./types/types";
import "./App.scss";

function App() {
  const [credentials, setCredentials] = useState<Credentials | null>(null);

  return (
    <div className="appContainer">
      {!credentials ? (
        <LoginPage onLogin={setCredentials} />
      ) : (
        <HomePage
        // credentials={credentials}
        // onLogout={() => setCredentials(null)}
        />
      )}
    </div>
  );
}

export default App;
