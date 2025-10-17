import { Modal } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { createNews } from "../../../api/api";
import { LoadingOutlined } from "@ant-design/icons";

const CreateNewsModal = ({ open, setOpen, fetchRecords }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [link,setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token")

  const handleSubmit = async () => {
    try {
      if (title === "") return toast.error("Title is required");
      if (description === "") return toast.error("Description is required");
      if (status === "") return toast.error("Status is required");
            if (link === "") return toast.error("Link is required");


      const result = await createNews(title, description, status,link,token);
      if (result?.data?.data) {
        await fetchRecords();
        setOpen(false);
        toast.success("News Create Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      centered
      width={800}
      footer={false}
      open={open}
      onCancel={() => setOpen(false)}
      title={
        <div className="modal_head">
          <h5>Create News</h5>
        </div>
      }
    >
      <div className="create_news">
        <div className="form_group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter News Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form_group">
          <label>Description</label>
          <input
            type="text"
            placeholder="Enter News Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form_group">
          <label>Link</label>
          <input
            type="text"
            placeholder="Enter News Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="form_group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={""}>Select Status</option>
            <option value={true}>Publish</option>
            <option value={false}>Unpublish</option>
          </select>
        </div>
        <button disabled={loading} onClick={handleSubmit}>
          {loading ? <LoadingOutlined /> : "Submit"}
        </button>
      </div>
    </Modal>
  );
};

export default CreateNewsModal;
