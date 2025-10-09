import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import img from "./assets/img/logo_blue.svg";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/admin/Dashboard";
import DashboardContent from "./pages/admin/DashboardContent";
import Services from "./pages/admin/Services";
import ContactList from "./pages/admin/ContactList";
import ConsulntList from "./pages/admin/ConsulntList";
import News from "./pages/admin/News";
import NewsLetter from "./pages/admin/NewsLetter";
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="split">
            <img src={img} alt="Save India Tax" />
            <h2>Save Tax India</h2>
          </div>
        }
      >
        <Toaster position="bottom-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/:name" element={<ServiceDetail />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardContent />} />
            <Route path="/dashboard/services" element={<Services />} />
                 <Route
              path="/dashboard/consulnt/clients"
              element={<ConsulntList />}
            />
            <Route
              path="/dashboard/contact/clients"
              element={<ContactList />}
            />
            <Route path="/dashboard/news" element={<News />} />
            <Route path="/dashboard/newsletter" element={<NewsLetter />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
