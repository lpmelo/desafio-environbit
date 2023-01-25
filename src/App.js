import ResponsiveAppBar from "./lib/elementComponents/AppBar/AppBar";
import AppRoutes from "./routes/routes";
import { LiveTvRounded } from "@mui/icons-material";
import "./App.css";

function App() {
  const pages = [
    { name: "Inicio", redirect: "/" },
    { name: "Filmes", redirect: "/" },
  ];
  return (
    <>
      <div>
        <ResponsiveAppBar
          pages={pages}
          AppBarClassName="appbar"
          logoIcon={
            <LiveTvRounded
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          }
          logoTitle={"MOVIESPOT"}
        />
      </div>

      <div className="root-container">
        <AppRoutes />
      </div>
    </>
  );
}
export default App;
