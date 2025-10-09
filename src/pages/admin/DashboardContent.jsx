import { useEffect, useState } from "react";
import BarChart from "../../chart/BarChart";
import { Modal, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAnalyticsApi } from "../../api/api";
import { LoadingOutlined } from "@ant-design/icons";
import img from "../../assets/img/graph.svg";
import img2 from "../../assets/img/user.svg";

const DashboardContent = () => {
  const { analytic } = useSelector((state) => state.analytics);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchRecords = async () => {
    try {
      setLoading(true);

      const result = await getAnalyticsApi();
      if (result?.data?.data) {
        dispatch({ type: "addAnalytic", payload: result?.data?.data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (analytic === null) {
      fetchRecords();
    }
  }, [analytic]);

  return (
    <section className="dashboard_content">
      <h1 className="page_title">Dashboard</h1>
      <p className="page_dis">
        Monitor tax savings, track users, and manage operations seamlessly.
      </p>
      <div className="dashboard_content_cards">
        <div className="card">
          <div className="card_top">
            <div className="card_top_left">
              <div className="icon_box">
                <i className="bx bxs-server"></i>
              </div>
              <p>Services Overview</p>
            </div>
            <div className="card_top_right">
              <p>Last Days</p>
            </div>
          </div>
          <div className="badge">
            <h2>{loading ? <LoadingOutlined /> : analytic?.totalServices} </h2>
            <div className="badge_text">Running</div>
          </div>

          <p>All services are running and published.</p>
        </div>
        <div className="card">
          <div className="card_top">
            <div className="card_top_left">
              <div className="icon_box2">
                <i className="bx bxs-user-detail"></i>
              </div>
              <p>Consultant Clients</p>
            </div>
            <div className="card_top_right">
              <p>Last 30 Days</p>
            </div>
          </div>
          <div className="badge">
            <h2 style={{ color: "oklch(75% 0.183 55.934)" }}>
              {loading ? <LoadingOutlined /> : analytic?.totalConsultants}{" "}
            </h2>
            <div
              className="badge_text"
              style={{
                background: "oklch(98% 0.016 73.684)",
                color: "oklch(75% 0.183 55.934)",
              }}
            >
              New
            </div>
          </div>

          <p>Active consultants available to assist clients.</p>
        </div>
        <div className="card">
          <div className="card_top">
            <div className="card_top_left">
              <div className="icon_box3">
                <i className="bx bxs-user-plus"></i>
              </div>
              <p>Contact Clients</p>
            </div>
            <div className="card_top_right">
              <p>Last 30 Days</p>
            </div>
          </div>
          <div className="badge">
            <h2 style={{ color: "oklch(67.3% 0.182 276.935)" }}>
              {loading ? <LoadingOutlined /> : analytic?.totalClients}{" "}
            </h2>
            <div
              className="badge_text"
              style={{
                background: "oklch(96.2% 0.018 272.314)",
                color: "oklch(67.3% 0.182 276.935)",
              }}
            >
              Contact
            </div>
          </div>

          <p>Total contact clients in the platform.</p>
        </div>
      </div>
      <div className="dashboard_content2">
        <div className="dashboard_content2_left">
          <h2> Registrations Overview</h2>
          <p>Clients vs Consultant Clients (Last 6 months)</p>
          <div className="bar_chart">
            {loading ? (
              <Skeleton.Button style={{ height: "280px" }} block active />
            ) : analytic.contactClients?.length === 0 &&
              analytic?.consultantClients?.length === 0 ? (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "250px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                  src={img}
                />
              </div>
            ) : (
              <BarChart
                clientsData={analytic?.contactClients || []}
                consultantsData={analytic?.consultantClients || []}
              />
            )}
          </div>
        </div>
        <div className="dashboard_content2_right">
          <h2>Today Clients</h2>
          <p>List the leaads of consultant or clients</p>
          <div className="leads">
            {loading ? (
              [1, 2, 3, 4, 5, 6]?.map((d) => (
                <div className="lead_wrap">
                  <Skeleton.Button active block />
                </div>
              ))
            ) : analytic?.todayClients?.length === 0 ? (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "250px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                  src={img2}
                />
              </div>
            ) : (
              analytic.todayClients?.map((d) => (
                <div
                  key={d?._id}
                  className="lead_wrap"
                  onClick={() => {
                    setOpen(d);
                    setData(d);
                  }}
                >
                  <div className="av">{d.name[0]}</div>
                  <div className="av_content">
                    <h5>{d?.name}</h5>
                    <p>Email: {d?.email}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {open && <PopModal open={open} setOpen={setOpen} data={data} />}
    </section>
  );
};

export default DashboardContent;

const PopModal = ({ open, setOpen, data }) => {
  return (
    <Modal
      centered
      width={800}
      onCancel={() => setOpen(false)}
      footer={false}
      open={open === data}
      title={
        <div className="modal_head">
          <h5>Client Query Information</h5>
        </div>
      }
    >
      <div className="pop_content">
        <div className="pop_top">
          <div className="av">G</div>
          <div className="av_content">
            <h5>{data?.name}</h5>
            <p>
              Email: <a href={`mailto:${data.email}`}>{data.email}</a>
            </p>
          </div>
        </div>
        <div className="pop_body">
          <h6>Query:</h6>
          <p>{data?.query}</p>
          <button onClick={() => (window.location.href = `tel:${data?.phone}`)}>
            Call Now
          </button>
        </div>
      </div>
    </Modal>
  );
};
