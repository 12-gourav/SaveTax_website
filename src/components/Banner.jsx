import img from "../assets/img/banner1.svg";
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion"

const Banner = () => {
  return (
    <section className="banner">
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="left"
      >
        <div className="tag-btn">Easily Extend Your Tax Deadline</div>

        <h1>
          <span>Save Tax </span>is your trusted partner for smarter tax
          solutions
        </h1>

        <h4>
          <Typewriter
            options={{
              strings: [
                "  Save Tax helps you file taxes quickly, accurately, and stress-free. Our expert services ensure compliance while maximizing your savings.",
                "Save Tax makes tax filing simple, fast, and stress-free. Our experts ensure accuracy, compliance, and maximum savings—so you can keep more of what you earn.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
        <p>
          Filing taxes doesn’t have to be confusing, time-consuming, or
          stressful. At Save Tax, we believe that every individual and business
          deserves a simple, transparent, and hassle-free way to stay compliant
          while maximizing their tax savings. Whether you are a salaried
          professional, a freelancer, a business owner, or an NRI, our expert
          tax filing solutions are designed to meet your unique financial needs.
        </p>
        <button>Get Started</button>
      </motion.div>
      <div className="right">
        <img src={img} alt="banner image" />
      </div>
    </section>
  );
};

export default Banner;
