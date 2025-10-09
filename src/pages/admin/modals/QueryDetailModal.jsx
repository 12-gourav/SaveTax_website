import { Modal } from "antd";
import React from "react";

const QueryDetailModal = ({ open, setOpen, data }) => {
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
        <textarea placeholder="reply"></textarea>
        <button>Send</button>
      </div>
    </Modal>
  );
};

export default QueryDetailModal;
