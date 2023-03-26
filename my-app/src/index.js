import { createRoot } from "react-dom/client"
import "./index.css";
import Root from "./Root";


const root = createRoot(document.querySelector("#root"));
root.render(<Root />)