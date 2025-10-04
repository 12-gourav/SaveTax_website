import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { DashboardRoutes } from "../../constants/dash";
import img from "../../assets/img/logo_blue.svg";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
          <button>
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
