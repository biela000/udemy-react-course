import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./components/context/auth-context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
);
