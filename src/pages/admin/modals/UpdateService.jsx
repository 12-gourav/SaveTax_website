import { Modal } from "antd";
import { serviceCategory } from "../../../constants/services";
import { bgColors, textColor } from "../../../constants/colors";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { LoadingOutlined } from "@ant-design/icons";
import { createServiceAPI, updateServiceAPI } from "../../../api/api";

const UpdateService = ({ setOpen, fetchRecords, data }) => {
  const [benifits, setBenifits] = useState([]);
  const [benifitText, setBenifitText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [short, setShort] = useState("");
  const [long, setLong] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [keyword, setKeyword] = useState([]);
  const [keywordQuery, setKeywordQuery] = useState("");
  const [color, setColor] = useState("");
  const [textColorValue, setTextColorValue] = useState("");
  const [cardImg, setCardImg] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [publish, setPublish] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      if (title === "") return toast.error("Title is required");
      if (category === "") return toast.error("Category is required");
      if (short === "") return toast.error("Short description is required");
      if (long === "") return toast.error("Long description is required");
      if (seoTitle === "") return toast.error("SEO title is required");
      if (seoDescription === "")
        return toast.error("SEO description is required");
      if (keyword?.length === 0)
        return toast.error("SEO keywords are required");
      if (textColorValue === "") return toast.error("Text color is required");
      if (cardImg === "") return toast.error("Card image is required");
      if (bannerImg === "") return toast.error("Banner image is required");
      if (publish === "") return toast.error("Publish status is required");
      if (benifits?.length === 0) return toast.error("Benefits are required");

      setLoading(true);

      const myForm = new FormData();

      myForm.append("title", title);
      myForm.append("shortDescription", short);
      myForm.append("longDescription", long);
      myForm.append("category", category);
      myForm.append("benifits", benifits);
      myForm.append("metaTitle", seoTitle);
      myForm.append("metaDescription", seoDescription);
      myForm.append("keyword", keyword);
      myForm.append("color", color);
      myForm.append("textColor", textColorValue);
      myForm.append("publish", publish);
      myForm.append("cardImg", cardImg);
      myForm.append("bannerImg", bannerImg);
      myForm.append("id", data._id);

      if (cardImg !== null || bannerImg !== null) {
        myForm.append("imgFlag", "yes");
      } else {
        myForm.append("imgFlag", "no");
      }

      const result = await updateServiceAPI(myForm);
      if (result.data.data) {
        toast.success("Service Create Successfully");
        await fetchRecords();
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBenifits = () => {
    setBenifits((prev) => [...prev, benifitText]);
    setBenifitText("");
  };

  const handleRemoveBenifits = (a) => {
    setBenifits(benifits.filter((f) => f !== a));
  };

  const handleAddKeyword = () => {
    setKeyword((prev) => [...prev, keywordQuery]);
    setKeywordQuery("");
  };

  const handleRemoveKeywords = (a) => {
    setKeyword(keyword.filter((f) => f !== a));
  };

  const handleColor = (value, index) => {
    setTextColorValue(value);
    setColor(bgColors[index]);
  };

  useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setCategory(data?.category);
      setShort(data?.shortDescription);
      setLong(data?.longDescription);
      setBenifits(data.benefits);
      setSeoTitle(data?.seo?.metaTitle);
      setSeoDescription(data?.seo?.metaDescription);
      setKeyword(data?.seo?.keyword);
      setColor(data?.color);
      setTextColorValue(data?.textColor);
      setPublish(data?.published);
    }
  }, [data]);

  return (
    <Modal
      open
      onCancel={() => setOpen(false)}
      title={
        <div className="modal_head">
          <h5>Create Service</h5>
        </div>
      }
      footer={
        <div className="modal_foot">
          <button className="" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button className="submit" disabled={loading} onClick={handleUpdate}>
            {loading ? <LoadingOutlined /> : "Submit"}
          </button>
        </div>
      }
      centered
      width={1000}
    >
      <section className="create_service">
        <div className="form_wrap">
          <div className="form_group">
            <label>Name</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Service Name"
              required
            />
          </div>
          <div className="form_group">
            <label>Category</label>
            <select
              placeholder="Select Service Category Name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {serviceCategory?.map((d) => (
                <option value={d.title} key={d.id + "kkk"}>
                  {d.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Short Description</label>
            <input
              type="text"
              value={short}
              onChange={(e) => setShort(e.target.value)}
              placeholder="Enter short description"
            />
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Long Description</label>
            <ReactQuill
              style={{
                marginBottom: "2rem",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
              theme="snow"
              value={long}
              onChange={setLong}
            />
          </div>
        </div>
        <div className="form_wrap2">
          <div className="form_group">
            <label>Benifits</label>
            <div className="group">
              <input
                value={benifitText}
                onChange={(e) => setBenifitText(e.target.value)}
                type="text"
                placeholder="Enter benifits"
              />
              <button onClick={handleAddBenifits}>Add</button>
            </div>
          </div>
          <ul>
            {benifits?.map((d, i) => (
              <li key={i + "ll"}>
                <i className="bx bxs-flag"></i>
                <p>{d}</p>{" "}
                <button onClick={() => handleRemoveBenifits(d)}>X</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>SEO Title</label>
            <input
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              type="text"
              placeholder="Enter SEO Title"
            />
          </div>
          <div className="form_group">
            <label>SEO Description</label>
            <input
              value={seoDescription}
              onChange={(e) => setSeoDescription(e.target.value)}
              type="text"
              placeholder="Enter SEO Description"
            />
          </div>
        </div>
        <div className="form_wrap2">
          <div className="form_group">
            <label>SEO Keywords</label>
            <div className="group">
              <input
                onChange={(e) => setKeywordQuery(e.target.value)}
                value={keywordQuery}
                type="text"
                placeholder="Enter keyword"
              />
              <button onClick={() => handleAddKeyword()}>Add</button>
            </div>
          </div>
          <ul>
            {keyword?.map((d, i) => (
              <li key={i + "gg"}>
                <i className="bx bxs-flag"></i>
                <p>{d}</p>{" "}
                <button onClick={() => handleRemoveKeywords(d)}>X</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Service Card Color</label>
            <div className="color_wrap">
              {textColor?.map((d, i) => (
                <div
                  className="cc"
                  style={{
                    background: d,
                  }}
                  onClick={() => handleColor(d, i)}
                  key={i + "nn"}
                >
                  {textColorValue === d && (
                    <div className="cc_tick">
                      <i className="bx bx-check"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="form_wrap">
          <div className="form_group">
            <label>Card Image</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.svg"
              onChange={(e) => setCardImg(e.target.files[0])}
            />
            <img src={data?.cardImg?.url} />
          </div>
          <div className="form_group">
            <label>Banner Image</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.svg"
              onChange={(e) => setBannerImg(e.target.files[0])}
            />
            <img src={data?.bannerImg?.url} />
          </div>
          <div className="form_group">
            <label>Status</label>
            <select
              onChange={(e) => setPublish(e.target.value)}
              value={publish}
            >
              <option value={""}>Select Status</option>
              <option value={true}>Published</option>
              <option value={false}>Unpublished</option>
            </select>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default UpdateService;
