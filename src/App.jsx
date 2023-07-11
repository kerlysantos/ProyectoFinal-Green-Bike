import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import GlobalContextProvider from "./context/GlobalContext";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import { BicycleListContainer } from "./components/pages/bicycleList/BicycleList.container";
import { BicycleAdminContainer } from "./components/pages/bicycleAdmin/BicycleAdmin.container";
import { BicycleDetailAdminContainer } from "./components/pages/bicycleDetail/BicycleDetailAdmin.container";
import { LoginForm } from "./components/pages/login_register/LoginForm";
import { RegistrationForm } from "./components/pages/login_register/RegistrationForm";
import { AdminDashboard } from "./components/pages/adminDashboard/AdminDashboard";
import { CategoryAdminContainer } from "./components/pages/categoryAdmin/CategoryAdmin.Container";
import { UserAdminContainer } from "./components/pages/userAdmin/UserAdmin.Container";
import { CreateCategoryContainer } from "./components/pages/createCategory/CreateCategory.container";
import MiPerfil from "./components/pages/MiPerfil/MiPerfil";
import { ReservationContainer } from "./components/pages/reservation/reservation.container";
import MisReservas from "./components/pages/MisReservas/MisReservas";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Footer />}>
            <Route element={<Header />}>
              <Route path={"/"} element={<Home />} />
              <Route path="/RegistrationForm" element={<RegistrationForm />} />
              <Route path="/LoginForm" element={<LoginForm />} />
              <Route path={"/dashboard"} element={<AdminDashboard />} />
              <Route path={"/userList"} element={<UserAdminContainer />} />
              <Route path={"/MiPerfil"} element={<MiPerfil />} />
              <Route path={"/MisReservas"} element={<MisReservas />} />
              <Route
                path={"/categoryList"}
                element={<CategoryAdminContainer />}
              />
              <Route
                path={"/createCategory"}
                element={<CreateCategoryContainer />}
              />
              <Route path={"/bicycleList"} element={<BicycleListContainer />} />
              <Route
                path={"/bicycleAdmin"}
                element={<BicycleAdminContainer />}
              />
              <Route
                path={"/bicycleAdmin/:serialNumber"}
                element={<BicycleDetailAdminContainer />}
              />
              <Route
                path={"/reservation/:serialNumber"}
                element={<ReservationContainer />}
              />
            </Route>
          </Route>

          <Route path="*" element={<h1> Página no encontrada</h1>} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
