import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import { BrowserRouter } from "react-router-dom";
// import FormApp from "./FormApp";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ContactApp />
    </BrowserRouter>
)
// root.render(<FormApp />)