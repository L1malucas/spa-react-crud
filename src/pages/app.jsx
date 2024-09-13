import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading/loading";
import Header from "../components/Header/header";

const MainPage = lazy(() => import("./MainPage/mainPage"));
const Page404 = lazy(() => import("./404/404"));
const EmployeeList = lazy(() => import("../components/Employee/list"));
const EmployeeAdd = lazy(() => import("../components/Employee/add"));

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/add" element={<EmployeeAdd />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;