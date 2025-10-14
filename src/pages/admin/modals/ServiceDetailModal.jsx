import { Modal } from "antd";

const ServiceDetailModal = ({ open, setOpen, data }) => {
  console.log(data)
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      width={1000}
      centered
      footer={false}
      title={
        <div className="modal_head">
          <h5>Service Detail</h5>
        </div>
      }
    >
      <div className="service_detail_modal">
        <img src={data?.bannerImg?.url} />
        <h1>{data?.title}</h1>
        <div className="service_detail_content">
          <div className="service_detail_left">
            <h3>Benifits</h3>
            {data?.benefits?.map((z,i) => (
              <li>{i+1}. {z}</li>
            ))}
          </div>
          <div className="service_detail_right">
            <div
              className="quill-content"
              dangerouslySetInnerHTML={{ __html: data?.longDescription }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceDetailModal;
