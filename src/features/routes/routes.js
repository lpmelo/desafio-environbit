import { Route, Routes } from "react-router-dom";
import HomePage from "../../components/pages/HomePage/HomePage";
import Movies from "../../components/pages/Movies/Movies";
function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/movies" element={<Movies />} />
    </Routes>
  );
}
export default AppRoutes;
