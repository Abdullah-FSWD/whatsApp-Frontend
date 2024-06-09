import logo from "./logo.svg";
import "./App.css";
import { Messenger } from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AccountProvider } from "./components/context/AccountProvider";

function App() {
  const clientId =
    "387010348726-4291n5d355frggehtomvcfqcnvttinvp.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
