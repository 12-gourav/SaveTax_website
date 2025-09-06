import img from "../assets/img/about.jpg";
const About = () => {
  return (
    <section className="about">
      <h3>About Us</h3>
      <p>We Handle Taxes, You Handle Growth</p>
      <div className="container">
        <div className="left">
          <p>
            At <span>SaveTax</span>, we believe managing taxes and compliances
            should be simple, transparent, and stress-free. Our mission is to
            empower individuals, startups, and businesses by providing reliable
            tax, compliance, and registration services all under one roof.
          </p>
          <p>
            With years of experience in income tax filing, GST returns, company
            registrations, and financial advisory, we are committed to
            delivering accurate, timely, and cost-effective solutions. Whether
            you’re a salaried professional, freelancer, entrepreneur, or a
            growing enterprise, we tailor our services to meet your unique
            needs.
          </p>
          <p>
            What sets us apart is our client-first approach, where we focus not
            only on compliance but also on helping you save time, reduce stress,
            and maximize your financial benefits.
          </p>
          <p>
            {" "}
            Our team of skilled tax experts and consultants works closely with
            you to simplify complex laws, ensure error-free filings, and keep
            you updated with the latest regulations—so you can focus on growing
            your business while we take care of the numbers.
          </p>
          <button>Learn More</button>
        </div>

        <div className="right">
          <div className="img">
            <img src={img} alt="img" />
            <div className="pulse">
              <div className="pulse-animation">
                <i className="bx bx-play-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
