import ResponsiveAppBar from "./lib/elementComponents/AppBar/AppBar";
import AppRoutes from "./features/routes/routes";
import { LiveTvRounded } from "@mui/icons-material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store/globalStore";
import { initializeApp } from "firebase/app";
import "./App.css";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAQc3Oa0c-Pw0viSkYO3jhC-stdR_Uxa2k",
  authDomain: "desafio-environbit-9a2e7.firebaseapp.com",
  databaseURL: "https://desafio-environbit-9a2e7-default-rtdb.firebaseio.com",
  projectId: "desafio-environbit-9a2e7",
  storageBucket: "desafio-environbit-9a2e7.appspot.com",
  messagingSenderId: "1035312302118",
  appId: "1:1035312302118:web:65c3961295808a4a00fee7",
  measurementId: "G-XV6W7DE07B",
});

function App() {
  const pages = [
    { name: "Inicio", redirect: "/" },
    { name: "Filmes", redirect: "/movies" },
  ];

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
