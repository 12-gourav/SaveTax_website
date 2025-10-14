import { Modal } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { sendMailAPI } from "../../../api/api";
const QueryDetailModal = ({ open, setOpen, data }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token")

  const handleSend = async () => {
    try {
      setLoading(true);
      if (message === "") return toast.error("Message is required");
      const result = await sendMailAPI(
        data?.name,
        data?.email,
        data?.query,
        message,
        token
      );
      if (result?.data?.data) {
        toast.success("Mail Send Successfully");
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
      width={800}
      footer={false}
      open={open}
      centered
      onCancel={() => setOpen(false)}
      title={
        <div className="modal_head">
          <h5>User Query Detail</h5>
        </div>
      }
    >
      <div className="word_wrap">
        <div className="text_wrap">
          <h4>Name</h4>
          <p>{data?.name}</p>
        </div>
        {data?.appointmentDate && (
          <div className="text_wrap">
            <h4>Consultantion Date</h4>
            <p>{new Date(data?.appointmentDate).toDateString()}</p>
          </div>
        )}
      </div>
      <div className="word_wrap">
        <div className="text_wrap">
          <h4>Email</h4>
          <p>{data?.email}</p>
        </div>
        <div className="text_wrap">
          <h4>Phone</h4>
          <p>{data?.phone}</p>
        </div>
      </div>
      <div className="word_wrap">
        <div className="text_wrap">
          <h4>Message</h4>
          <p>{data?.query}</p>
        </div>
      </div>
      <div className="reply">
        <p>
          You can reply to user queries here. Please ensure your responses are
          clear, professional, and address the user's concern accurately.
        </p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Reply to this message…"
        ></textarea>
        <button disabled={loading} onClick={handleSend}>
          {loading ? <LoadingOutlined /> : "Send"}
        </button>
      </div>
    </Modal>
  );
};

export default QueryDetailModal;
