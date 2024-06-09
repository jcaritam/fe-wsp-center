import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../ui/pages/login.page"

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  )
}
