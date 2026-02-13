import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "../src/routes/Approutes"

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}