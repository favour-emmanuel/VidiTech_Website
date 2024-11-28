import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Route>
          <Route
            path="/*"
            element={
              <h1 className="flex justify-center text-2xl font-bold">
                Page not found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
