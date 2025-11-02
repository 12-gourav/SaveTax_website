import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import img from "./assets/img/logo.png";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/admin/Dashboard";
import DashboardContent from "./pages/admin/DashboardContent";
import Services from "./pages/admin/Services";
import ContactList from "./pages/admin/ContactList";
import ConsulntList from "./pages/admin/ConsulntList";
import News from "./pages/admin/News";
import NewsLetter from "./pages/admin/NewsLetter";
import { useDispatch } from "react-redux";
import { loadAPI } from "./api/api";
import AuthCheck from "./pages/AuthCheck";
import Error from "./pages/Error";
const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

const App = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const loadUser = async () => {
    try {
      setAuthLoading(true);
      const result = await loadAPI(token);
      if (result?.data?.data) {
        dispatch({ type: "load", payload: result?.data?.data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      loadUser();
    }
  }, [token]);

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
            <h2>
              Save Tax <span>Consultancy Service</span>
            </h2>
          </div>
        }
      >
        <Toaster position="bottom-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services/:name" element={<ServiceDetail />} />
          <Route
            path="/auth/login"
            element={<Login authLoading={authLoading} />}
          />

          <Route
            path="/dashboard"
            element={
              <AuthCheck>
                <Dashboard />
              </AuthCheck>
            }
          >
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
          <Route path="/*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
