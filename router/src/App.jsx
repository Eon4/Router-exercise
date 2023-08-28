import { MainLayout } from "./layout/mainLayout";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { EmployeesPage } from "./pages/employees";
import { NotFoundPage } from "./pages/notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/employees" element={<EmployeesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;