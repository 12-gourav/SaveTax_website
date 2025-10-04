import { Modal } from "antd";
import img from "../assets/img/cute2.png";
import { useState } from "react";
import { createContact } from "../api/api";
import toast from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";

const ConsultModal = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (name === "") return toast.error("Name is required");
      if (email === "") return toast.error("Email is required");
      if (phone === "") return toast.error("Phone is required");
      if (query === "") return toast.error("Query is required");

      setLoading(true);

      const result = await createContact(name, email, phone, query, "Consulnt");
      if (result?.data?.data) {
        toast.success(
          "Thank you for contacting us. We’ve received your query and will get back to you shortly."
        );
        setName("");
        setEmail("");
        setPhone("");
        setQuery("");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
