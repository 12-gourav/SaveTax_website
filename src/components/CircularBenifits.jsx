import { useEffect, useState } from "react";
import img from "../assets/img/c1.svg";
import img2 from "../assets/img/c2.svg";
import img3 from "../assets/img/c3.svg";
import img4 from "../assets/img/c4.svg";
import img5 from "../assets/img/c5.svg";
import img6 from "../assets/img/c6.svg";
import { circularServices } from "../constants/services";

const CircularBenifits = () => {
  const [state, setState] = useState("");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (state !== "") setContent(circularServices.find((f) => f.id === state));
  }, [state]);

  return (
    <section className="circular_benits">
      <div className="left">
        <div
          className="container"
          style={{ border: `2px solid ${content.bg}` }}
        >
          <div className="cicon">
            <div
              className={state === "1" ? "imgbx active" : "imgbx"}
              style={{
                "--i": 1,
                border:
                  state === "1"
                    ? "2px solid oklch(70.5% 0.213 47.604)"
                    : "2px solid transparent",
              }}
            >
              <img src={img} onClick={() => setState("1")} />
            </div>
            <div
              className={state === "2" ? "imgbx active" : "imgbx"}
              style={{
                "--i": 2,
                border:
                  state === "2"
                    ? "2px solid oklch(58.5% 0.233 277.117)"
                    : "2px solid transparent",
              }}
            >
              <img src={img2} onClick={() => setState("2")} />
            </div>
            <div
              className={state === "3" ? "imgbx active" : "imgbx"}
              style={{
                "--i": 3,
                border:
                  state === "3"
                    ? "2px solid oklch(72.3% 0.219 149.579)"
                    : "2px solid transparent",
              }}
            >
              <img src={img3} onClick={() => setState("3")} />
            </div>
            <div
              className={state === "4" ? "imgbx active" : "imgbx"}
              style={{
                "--i": 4,
                border:
                  state === "4"
                    ? "2px solid oklch(65.6% 0.241 354.308)"
                    : "2px solid transparent",
              }}
            >
              <img src={img4} onClick={() => setState("4")} />
            </div>
            <div
              className={state === "5" ? "imgbx active" : "imgbx"}
              style={{
                "--i": 5,
                border:
                  state === "5"
                    ? "2px solid oklch(64.5% 0.246 16.439)"
                    : "2px solid transparent",
              }}
            >
              <img src={img5} onClick={() => setState("5")} />
            </div>
            <div
              className={state === "6" ? "imgbx active" : "imgbx"}
              style={{
                "--i": 6,
                border:
                  state === "6"
                    ? "2px solid oklch(70.7% 0.165 254.624)"
                    : "2px solid transparent",
              }}
            >
              <img src={img6} onClick={() => setState("6")} />
            </div>
          </div>
          <div className="content">
            <div
              className={
                circularServices.some((val) => state.includes(val.id))
                  ? "content_bx active"
                  : "content_bx"
              }
            >
              <p style={{ color: content.color }}>{content?.short || ""}</p>
            </div>
            {state==="" && <h2>Why Choose <span>SaveTax</span></h2>}
          </div>
        </div>
      </div>
      {state !== "" && (
        <div className="right">
          {content?.long?.map((d) => (
            <div className="scard" style={{ background: content.bg }}>
              <h4 style={{ color: content.color }}>{d.title}</h4>
              <p>{d.dis}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CircularBenifits;
