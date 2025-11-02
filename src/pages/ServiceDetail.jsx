import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/img/nodata.svg";
import { Skeleton } from "antd";
import Footrer from "../components/Footrer";
import HomePageHelmet from "../components/HomePageHelmet";
import { useEffect, useState } from "react";
import ConsultModal from "../components/ConsultModal";
import { fetchServiceDetailAPI } from "../api/api";

const ServiceDetail = () => {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const id = decodeURI(location.pathname.split("/services/")[1]);

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await fetchServiceDetailAPI(id);
      if (result?.data?.data) {
        setState(result?.data?.data);
      } else {
        setState(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRecords();
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <HomePageHelmet />
        <section className="service_detail">
          <Navbar setModalOpen={setModalOpen} />

          <div className="loading">
            <Skeleton.Button block active style={{ height: 500 }} />
          </div>
        </section>
        <Footrer />
      </>
    );
  }

  if (state === null) {
    return (
      <>
        <HomePageHelmet />
        <section className="service_detail">
          <Navbar setModalOpen={setModalOpen} />
          <div className="loading">
            <div className="nodata">
              <img src={img} />
            </div>
          </div>
        </section>
        <Footrer />
      </>
    );
  }

  return (
    <>
      <HomePageHelmet />
      <section className="service_detail">
        <Navbar setModalOpen={setModalOpen} />
        <div className="detail_header">
          <button>Save Tax Consultancy Service</button>
          <h1>{state?.title}</h1>
          <div className="img_box">
            <img src={state?.bannerImg?.url} alt="Save Tax India" />
            <div className="bg">
              <div className="page_bread">
                <Link to={"/"}>Home</Link>
                <i className='bx bx-chevron-right'></i>
                <Link to={"/#services"}>Services</Link>
                <i className='bx bx-chevron-right'></i>
                Service Detail
              </div>
            </div>
          </div>
        </div>
        <div className="detail_body">
          <div className="left">
            <h3>Benifits</h3>
            {state?.benefits?.map((z, i) => (
              <li>
                {i + 1}. {z}
              </li>
            ))}
          </div>
          <div className="right">
            <br />

            <div
              className="quill-content"
              dangerouslySetInnerHTML={{ __html: state?.longDescription }}
            ></div>
          </div>
        </div>
      </section>
      <Footrer />
      {modalOpen && <ConsultModal open={modalOpen} setOpen={setModalOpen} />}
    </>
  );
};

export default ServiceDetail;
