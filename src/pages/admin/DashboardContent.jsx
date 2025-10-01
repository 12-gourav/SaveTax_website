import React, { useEffect, useState } from "react";
import BarChart from "../../chart/BarChart";
import { Modal, Popover } from "antd";

const DashboardContent = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");

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
              <p>Last 30 Days</p>
            </div>
          </div>
          <div className="badge">
            <h2>40 </h2>
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
            <h2 style={{ color: "oklch(75% 0.183 55.934)" }}>12 </h2>
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
              <p>Clients</p>
            </div>
            <div className="card_top_right">
              <p>Last 30 Days</p>
            </div>
          </div>
          <div className="badge">
            <h2 style={{ color: "oklch(67.3% 0.182 276.935)" }}>20+ </h2>
            <div
              className="badge_text"
              style={{
                background: "oklch(96.2% 0.018 272.314)",
                color: "oklch(67.3% 0.182 276.935)",
              }}
            >
              Register
            </div>
          </div>

          <p>Total registered clients in the platform.</p>
        </div>
      </div>
      <div className="dashboard_content2">
        <div className="dashboard_content2_left">
          <h2> Registrations Overview</h2>
          <p>Clients vs Consultant Clients (Last 6 months)</p>
          <div className="bar_chart">
            <BarChart
              clientsData={[15, 22, 18, 30, 28, 35]}
              consultantsData={[5, 9, 7, 12, 10, 15]}
            />
          </div>
        </div>
        <div className="dashboard_content2_right">
          <h2>Today Clients</h2>
          <p>List the leaads of consultant or clients</p>
          <div className="leads">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((d) => (
              <div
                className="lead_wrap"
                onClick={() => {
                  setOpen(d);
                  setData(d);
                }}
              >
                <div className="av">G</div>
                <div className="av_content">
                  <h5>Gaurav</h5>
                  <p>Email: gourav@gmail.com</p>
                </div>
              </div>
            ))}
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
            <h5>Gaurav</h5>
            <p>Email: gourav@gmail.com</p>
          </div>
        </div>
        <div className="pop_body">
          <h6>Query:</h6>
          <p>
            If you don’t want all window scrolls to close it, but only when the
            parent div scrolls:If you don’t want all window scrolls to close it,
            but only when the parent div scrolls:If you don’t want all window
            scrolls to close it, but only when the parent div scrolls:
          </p>
          <button>Call Now</button>
        </div>
      </div>
    </Modal>
  );
};
