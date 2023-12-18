import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserRouter from "./router/UserRouter"
function App() {
console.log("app");
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/*'} element={<UserRouter/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
