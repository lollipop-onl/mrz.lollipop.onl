import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import { App } from "./App";

const root = document.getElementById("root")!;
createRoot(root).render(<App />);
