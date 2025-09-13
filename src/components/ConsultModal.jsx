import { Modal } from "antd";
import img from "../assets/img/cute2.png";

const ConsultModal = ({ open, setOpen }) => {
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
          <img src={img} />

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
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="form_group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="form_group">
            <label>Contact </label>
            <input type="text" placeholder="Enter your contact number" />
          </div>
          <div className="form_group">
            <label>Query</label>
            <textarea type="text" placeholder="Enter your question" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </Modal>
  );
};

export default ConsultModal;
