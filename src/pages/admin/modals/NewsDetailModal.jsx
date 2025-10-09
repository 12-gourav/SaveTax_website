import { Modal } from "antd";
import React from "react";

const NewsDetailModal = ({ open, setOpen, data }) => {
  return (
    <Modal
      width={800}
      footer={false}
      open={open}
      centered
      onCancel={() => setOpen(false)}
      title={
        <div className="modal_head">
          <h5>News Detail</h5>
        </div>
      }
    >
      <div className="word_wrap">
        <div className="text_wrap">
          <h4>Title</h4>
          <p>{data?.title}</p>
        </div>
      </div>
      <div className="word_wrap">
        <div className="text_wrap">
          <h4>News Description</h4>
          <p>{data?.description}</p>
        </div>
      </div>
      <div className="word_wrap">
        <div className="text_wrap">
          <h4>News Status</h4>
          <button className={data?.status ? "p" : "u"}>
            {data?.status ? "Publish" : "Unpublish"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewsDetailModal;
