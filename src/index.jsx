import { createRoot } from "react-dom/client";
import ContactApp from "./ContactApp";
// import FormApp from "./FormApp";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />)
// root.render(<FormApp />)