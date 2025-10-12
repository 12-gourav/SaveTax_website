import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { DashboardRoutes } from "../../constants/dash";
import img from "../../assets/img/logo_blue.svg";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          dispatch({ type: "logout" });
          toast.success("Logout Successfull");
          navigate("/auth/login")
        }
      });
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <section className="dashboard">
      <div className="dashboard_left">
        <div className="dash_head">
          <img src={img} />
          <h2>Save Tax India</h2>
        </div>

        <div className="dash_nav">
          {DashboardRoutes?.map((d) => (
            <div
              key={d.id}
              className={
                location.pathname === d.path ? "dash_link active" : "dash_link"
              }
              onClick={() => navigate(d.path)}
            >
              {d.icon}
              <p>{d.title}</p>
            </div>
          ))}
        </div>
        <div className="dash_foot">
          <button onClick={handleLogout}>
            <i className="bx bx-log-out-circle"></i>Logout
          </button>
        </div>
      </div>
      <div className="dashboard_right">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
