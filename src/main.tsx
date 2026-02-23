import "./style.css"

import React from "react"
import ReactDOM from "react-dom/client"

import App from "../App/app"
import { CartProvider } from "./modules/cart/context/CartProvider"
const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
