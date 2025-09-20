import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import img from "../assets/img/optimize/b1.jpg";
import { Anchor } from "antd";
import Footrer from "../components/Footrer";
import HomePageHelmet from "../components/HomePageHelmet";
import { useState } from "react";
import ConsultModal from "../components/ConsultModal";

const ServiceDetail = () => {
  const location = useLocation();
    const [modalOpen, setModalOpen] = useState(false);
  


  return (
    <>
       <HomePageHelmet />
      <section className="service_detail">
        <Navbar setModalOpen={setModalOpen} />
        <div className="detail_header">
          <button>Save Tax India</button>
          <h1>{decodeURI(location.pathname.split("/services/")[1])}</h1>
          <div className="img_box">
            <img src={img} alt="Save Tax India" />
            <div className="bg"></div>
          </div>
        </div>
        <div className="detail_body">
          <div className="left">
            <Anchor
              offsetTop={100}
              items={[
                {
                  key: "part-1",
                  href: "#part-1",
                  title: "What is Income Tax Filing?",
                },
                {
                  key: "part-2",
                  href: "#part-2",
                  title: "Why Choose Save Tax for ITR Filing?",
                },
                {
                  key: "part-3",
                  href: "#part-3",
                  title: "Who Should File ITR?",
                },
                {
                  key: "part-4",
                  href: "#part-4",
                  title: "Types of ITR Filing We Handle",
                },
                {
                  key: "part-5",
                  href: "#part-5",
                  title: "Our Process",
                },
                {
                  key: "part-6",
                  href: "#part-6",
                  title: "Benefits of Filing ITR with Save Tax",
                },
              ]}
            />
          </div>
          <div className="right">
            <div id="part-1" className="part" key={"part-1"}>
              <h1>What is Income Tax Filing?</h1>
              <p>
                Income Tax Filing, commonly known as ITR (Income Tax Return)
                filing, is the process of reporting your annual income,
                expenses, investments, and taxes paid to the Government of
                India.
              </p>
              <p>
                Every taxpayer in India – whether an individual, freelancer,
                salaried employee, business owner, or company – is required to
                file ITR as per the Income Tax Act, 1961.
              </p>
              <ul>
                <li>Claim refunds on excess tax paid</li>
                <li>Carry forward losses for future tax benefits</li>
                <li>Get hassle-free loan & visa approvals</li>
                <li>Stay compliant and avoid penalties</li>
              </ul>
            </div>
            <div id="part-2" className="part" key={"part-2"}>
              <h1>Why Choose Save Tax for ITR Filing?</h1>
              <p>
                At Save Tax, we make your ITR filing fast, accurate, and
                stress-free. Our tax experts ensure you get the maximum refund
                and use every eligible tax deduction.
              </p>
              <ul>
                <li>Claim refunds on excess tax paid</li>
                <li>Carry forward losses for future tax benefits</li>
                <li>Get hassle-free loan & visa approvals</li>
                <li>Stay compliant and avoid penalties</li>
              </ul>
            </div>
            <div id="part-3" className="part" key={"part-3"}>
              <h1>Who Should File ITR?</h1>
              <p>You are required to file an Income Tax Return in India if:</p>
              <ul>
                <li>
                  <strong>Salaried Employees</strong> with income above the
                  applicable basic exemption limits.
                </li>
                <li>
                  <strong>Self-employed Professionals</strong> such as
                  freelancers, consultants, doctors, and lawyers.
                </li>
                <li>
                  <strong>Business Owners</strong> including proprietorships,
                  partnerships, LLPs, and companies.
                </li>
                <li>
                  <strong>Investors & Traders</strong> with capital gains from
                  stocks, mutual funds or property sales.
                </li>
                <li>
                  <strong>NRIs</strong> with income in India and people with
                  foreign assets or overseas income.
                </li>
              </ul>
            </div>
            <div id="part-4" className="part" key={"part-4"}>
              <h1>Types of ITR Filing We Handle</h1>
               <p>
                Income Tax Filing, commonly known as ITR (Income Tax Return)
                filing, is the process of reporting your annual income,
                expenses, investments, and taxes paid to the Government of
                India.
              </p>
              <p>
                Every taxpayer in India – whether an individual, freelancer,
                salaried employee, business owner, or company – is required to
                file ITR as per the Income Tax Act, 1961.
              </p>
               <p>
                Income Tax Filing, commonly known as ITR (Income Tax Return)
                filing, is the process of reporting your annual income,
                expenses, investments, and taxes paid to the Government of
                India.
              </p>
              <p>
                Every taxpayer in India – whether an individual, freelancer,
                salaried employee, business owner, or company – is required to
                file ITR as per the Income Tax Act, 1961.
              </p>
              <h5>ITR-1</h5>
              <p>
                For salaried individuals with income up to ₹50 lakh (including
                salary, pension, one house property, and other sources).
              </p>
              <h5>ITR-2</h5>
              <p>
                For individuals and HUFs with income from salary, multiple house
                properties, or capital gains.
              </p>
              <h5>ITR-3</h5>
              <p>
                For individuals & HUFs with income from business or profession.
              </p>
              <h5>ITR-4</h5>
              <p>
                For presumptive income taxpayers (business & professionals under
                Section 44AD, 44ADA, 44AE).
              </p>
              <h5>ITR-5</h5>
              <p>
                For LLPs, partnerships, and companies requiring detailed tax
                compliance.
              </p>
            </div>
            <div id="part-5" className="part" key={"part-5"}>
              <h1>Our Process</h1>
               <p>
                Income Tax Filing, commonly known as ITR (Income Tax Return)
                filing, is the process of reporting your annual income,
                expenses, investments, and taxes paid to the Government of
                India.
              </p>
              <p>
                Every taxpayer in India – whether an individual, freelancer,
                salaried employee, business owner, or company – is required to
                file ITR as per the Income Tax Act, 1961.
              </p>
              <ul>
                <li>
                  <b>Upload Documents</b> – Submit salary slips, Form-16,
                  investment proofs, and other details.
                </li>
                <li>
                  <b> Expert Review</b> – Our tax professionals review your
                  documents and prepare your ITR.
                </li>
                <li>
                  <b>Filing & Submission</b> – We file your return accurately
                  with the Income Tax Department.
                </li>
                <li>
                  <b> Acknowledgment & Tracking</b> – Get confirmation and track
                  the refund status.
                </li>
              </ul>
            </div>
            <div id="part-6" className="part" key={"part-5"}>
              <h1>Benefits of Filing ITR with Save Tax</h1>
               <p>
                Income Tax Filing, commonly known as ITR (Income Tax Return)
                filing, is the process of reporting your annual income,
                expenses, investments, and taxes paid to the Government of
                India.
              </p>
              <p>
                Every taxpayer in India – whether an individual, freelancer,
                salaried employee, business owner, or company – is required to
                file ITR as per the Income Tax Act, 1961.
              </p>
              <ul>
                <li>
                  <strong>Maximize Tax Savings:</strong> Claim all eligible
                  deductions and exemptions to reduce taxable income.
                </li>
                <li>
                  <strong>Avoid Notices & Penalties:</strong> Accurate filing
                  and compliance reduce the risk of notices from the tax
                  department.
                </li>
                <li>
                  <strong>Faster Refunds:</strong> Properly filed returns and
                  timely e-verification speed up refunds.
                </li>
                <li>
                  <strong>Financial Credibility:</strong> ITR copies help with
                  loan applications, visa processing and financial KYC.
                </li>
                <li>
                  <strong>Peace of Mind:</strong> Professional handling ensures
                  correctness and reduces stress.
                </li>
                 <li>
                  <strong>Maximize Tax Savings:</strong> Claim all eligible
                  deductions and exemptions to reduce taxable income.
                </li>
                <li>
                  <strong>Avoid Notices & Penalties:</strong> Accurate filing
                  and compliance reduce the risk of notices from the tax
                  department.
                </li>
                <li>
                  <strong>Faster Refunds:</strong> Properly filed returns and
                  timely e-verification speed up refunds.
                </li>
                <li>
                  <strong>Financial Credibility:</strong> ITR copies help with
                  loan applications, visa processing and financial KYC.
                </li>
                <li>
                  <strong>Peace of Mind:</strong> Professional handling ensures
                  correctness and reduces stress.
                </li>
              </ul>
               <p>
                Income Tax Filing, commonly known as ITR (Income Tax Return)
                filing, is the process of reporting your annual income,
                expenses, investments, and taxes paid to the Government of
                India.
              </p>
              <p>
                Every taxpayer in India – whether an individual, freelancer,
                salaried employee, business owner, or company – is required to
                file ITR as per the Income Tax Act, 1961.
              </p>
               <p>
                Income Tax Filing, commonly known as ITR (Income Tax Return)
                filing, is the process of reporting your annual income,
                expenses, investments, and taxes paid to the Government of
                India.
              </p>
              <p>
                Every taxpayer in India – whether an individual, freelancer,
                salaried employee, business owner, or company – is required to
                file ITR as per the Income Tax Act, 1961.
              </p>
               <p>
                Income Tax Filing, commonly known as ITR (Income Tax Return)
                filing, is the process of reporting your annual income,
                expenses, investments, and taxes paid to the Government of
                India.
              </p>
              <p>
                Every taxpayer in India – whether an individual, freelancer,
                salaried employee, business owner, or company – is required to
                file ITR as per the Income Tax Act, 1961.
              </p>
            </div>
            
            <b>
              👉 At Save Tax, we don’t just file your returns – we help you save
              more, stay compliant, and grow financially.
            </b>
          </div>
        </div>
      </section>
      <Footrer/>
      {modalOpen && <ConsultModal open={modalOpen} setOpen={setModalOpen} />}
    </>
  );
};

export default ServiceDetail;
