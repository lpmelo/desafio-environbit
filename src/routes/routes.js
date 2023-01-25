import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
