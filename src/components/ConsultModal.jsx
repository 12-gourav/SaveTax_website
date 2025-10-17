import { DatePicker, Modal, TimePicker } from "antd";
import img from "../assets/img/cute2.png";
import { useEffect, useState } from "react";
import { createContact } from "../api/api";
import toast from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";

const ConsultModal = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSubmit = async () => {
    try {
      if (!name.trim()) return toast.error("Name is required");
      if (!/^[a-zA-Z\s]+$/.test(name))
        return toast.error("Name must contain only letters and spaces");

      // Email validation
      if (!email.trim()) return toast.error("Email is required");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email))
        return toast.error("Please enter a valid email");

      // Phone validation (10-digit number)
      if (!phone.trim()) return toast.error("Phone is required");
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone))
        return toast.error("Please enter a valid 10-digit phone number");

      // Query validation
      if (!query.trim()) return toast.error("Query is required");

      // Date validation
      if (!date.trim()) return toast.error("Consultation Date is required");
      if (isNaN(new Date(date).getTime()))
        return toast.error("Please enter a valid date");

      if (isMobile && time === "")
        return toast.error("Consultation Time is required ");

      setLoading(true);

      const result = await createContact(
        name,
        email,
        phone,
        query,
        "Consulnt",
        isMobile ? `${date} ${time?.format("h:mm A")}` : date
      );
      if (result?.data?.data) {
        toast.success(
          "Thank you for contacting us. We’ve received your query and will get back to you shortly."
        );
        setName("");
        setEmail("");
        setPhone("");
        setQuery("");
        setTime("")
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      width={800}
      footer={false}
    >
      <div className="consultant_modal">
        <div className="left">
          <img src={img} alt="Save Tax India" />

          <p>
            For any queries, feel free to connect with us at
            <a href="mailto:savetax.info@gmail.com"> savetax.info@gmail.com</a>.
            We’ll be glad to assist you
          </p>
        </div>
        <div className="right">
          <h4>Schedule Your Consultation</h4>

          <div className="form_group">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form_group">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form_group">
            <label>Contact </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter your contact number"
            />
          </div>
          {isMobile ? (
            <>
              <div className="form_group2">
                <label>Consultation Date </label>

                <DatePicker
                  format="YYYY-MM-DD"
                  onChange={(value1, value2) => setDate(value2)}
                />
              </div>
              <div className="form_group2">
                <label>Consultation Time </label>

                <TimePicker
                  use12Hours
                  format="h:mm a"
                  minuteStep={5}
                  value={time}
                  onChange={(value) => setTime(value)}
                  placeholder="Select time"
                />
              </div>
            </>
          ) : (
            <div className="form_group2">
              <label>Consultation Time </label>

              <DatePicker
                showTime={{ format: "HH:mm a" }}
                format="YYYY-MM-DD h:mm a"
                onChange={(value1, value2) => setDate(value2)}
              />
            </div>
          )}

          <div className="form_group">
            <label>Query</label>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Enter your question"
            />
          </div>
          <button disabled={loading} onClick={handleSubmit}>
            {loading ? <LoadingOutlined /> : "Submit"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConsultModal;
