import { useEffect, useRef, useState } from "react";
import { serviceCategory } from "../constants/services";
import { Link } from "react-router-dom";
import { fetchServicesAPI } from "../api/api";
import { Skeleton } from "antd";
import img from "../assets/img/nodata.svg";
import { useDispatch, useSelector } from "react-redux";

const HomeServices = () => {
  const { services } = useSelector((state) => state.services);
  const [active, setActiveTab] = useState("Compliance");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await fetchServicesAPI();
      if (result?.data?.data) {
        setState(result?.data?.data);
        dispatch({ type: "addServices", payload: result?.data?.data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (services?.length === 0) {
      fetchRecords();
    } else {
      setState(services);
    }
  }, [services]);

  const scroll = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -360 : 360; // adjust to card width
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="service" id="services">
      <h3>Explore Our Professional Services</h3>
      <p>Your Trusted Partner for Tax and Compliance Solutions</p>
      <div className="container">
        <div className="tabs">
          <div className="tab_head">
            {serviceCategory?.map((d) => (
              <div
                className={d.title === active ? "tab_item active" : "tab_item"}
                key={d.id}
                onClick={() => setActiveTab(d.title)}
              >
                {d.icon}
                <p>{d.title}</p>
              </div>
            ))}
          </div>
          <div className="tab_body">
            {loading ? (
              [1, 2, 3, 4, 5, 6, 7, 8]?.map((d) => (
                <div style={{ width: 250, minHeight: 200 }} key={d}>
                  <Skeleton.Button
                    block
                    active
                    style={{ height: 200, width: 250 }}
                  />
                </div>
              ))
            ) : state?.filter((f) => f.category === active)?.length === 0 ? (
              <div className="nodata">
                <img src={img} />
              </div>
            ) : (
              state
                ?.filter((f) => f.category === active)
                ?.map((d, i) => (
                  <div
                    className="cards"
                    key={d._id}
                    style={{ background: d.color }}
                  >
                    <div className="ct">
                      <img src={d?.cardImg?.url} alt="Save Tax India" />
                    </div>
                    <h2 style={{ color: d?.textColor }}>{d?.title}</h2>
                    <p>
                      {d?.shortDescription?.length > 140
                        ? d?.shortDescription?.slice(0, 140) + " ..."
                        : d?.shortDescription}
                    </p>
                    <Link
                      style={{ color: d.textColor }}
                      to={`/services/${d?._id}`}
                    >
                      View Service
                    </Link>
                  </div>
                ))
            )}
          </div>
        </div>
        <div className="mobile_tab">
          <h4>Compliance Services</h4>
          <div className="mobile_tab_wrap" ref={ref1}>
            {state
              ?.filter((f) => f.category === "Compliance")
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d._id}
                  style={{ background: d.color }}
                >
                  <div className="ct">
                    <img src={d.cardImg?.url} alt="Save Tax India" />
                  </div>
                  <h2 style={{ color: d?.textColor }}>{d?.title}</h2>
                  <p>
                    {" "}
                    {d?.shortDescription?.length > 140
                      ? d?.shortDescription?.slice(0, 140) + " ..."
                      : d?.shortDescription}
                  </p>
                  <Link
                    style={{ color: d.textColor }}
                    to={`/services/${d._id}`}
                  >
                    View Service
                  </Link>
                </div>
              ))}
          </div>
          <div className="circle_btn">
            <button onClick={() => scroll("left", ref1)}>
              <i className="bx bx-left-arrow-alt"></i>
            </button>
            <button onClick={() => scroll("right", ref1)}>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <div className="mobile_tab">
          <h4>Other Services</h4>
          <div className="mobile_tab_wrap" ref={ref2}>
            {state
              ?.filter((f) => f.category === "Other Services")
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d?._id}
                  style={{ background: d.color }}
                >
                  <div className="ct">
                    <img src={d?.cardImg?.url} alt="Save Tax India" />
                  </div>
                  <h2 style={{ color: d?.textColor }}>{d?.title}</h2>
                  <p>
                    {" "}
                    {d?.shortDescription?.length > 140
                      ? d?.shortDescription?.slice(0, 140) + " ..."
                      : d?.shortDescription}
                  </p>
                  <Link
                    style={{ color: d?.textColor }}
                    to={`/services/${d._id}`}
                  >
                    View Service
                  </Link>
                </div>
              ))}
          </div>
          <div className="circle_btn">
            <button onClick={() => scroll("left", ref2)}>
              <i className="bx bx-left-arrow-alt"></i>
            </button>
            <button onClick={() => scroll("right", ref2)}>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <div className="mobile_tab">
          <h4>Registrations Services</h4>
          <div className="mobile_tab_wrap" ref={ref3}>
            {state
              ?.filter((f) => f.category === "Registrations")
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d?._id}
                  style={{ background: d?.color }}
                >
                  <div className="ct">
                    <img src={d?.cardImg?.url} alt="Save Tax India" />
                  </div>
                  <h2 style={{ color: d.textColor }}>{d.title}</h2>
                  <p>
                    {" "}
                    {d?.shortDescription?.length > 140
                      ? d?.shortDescription?.slice(0, 140) + " ..."
                      : d?.shortDescription}
                  </p>
                  <Link
                    style={{ color: d?.textColor }}
                    to={`/services/${d?._id}`}
                  >
                    View Service
                  </Link>
                </div>
              ))}
          </div>
          <div className="circle_btn">
            <button onClick={() => scroll("left", ref3)}>
              <i className="bx bx-left-arrow-alt"></i>
            </button>
            <button onClick={() => scroll("right", ref3)}>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <div className="mobile_tab">
          <h4>Support Services</h4>
          <div className="mobile_tab_wrap">
            {state
              ?.filter((f) => f.category === "Support")
              ?.map((d, i) => (
                <div
                  className="cards"
                  key={d?._id}
                  style={{ background: d?.color }}
                >
                  <div className="ct">
                    <img src={d?.cardImg?.url} alt="Save Tax India" />
                  </div>
                  <h2 style={{ color: d?.textColor }}>{d?.title}</h2>
                  <p>
                    {" "}
                    {d?.shortDescription?.length > 140
                      ? d?.shortDescription?.slice(0, 140) + " ..."
                      : d?.shortDescription}
                  </p>
                  <Link
                    style={{ color: d?.textColor }}
                    to={`/services/${d?._id}`}
                  >
                    View Service
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
