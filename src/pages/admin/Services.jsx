import { Pagination, Popover, Skeleton } from "antd";
import { useCallback, useEffect, useState } from "react";
import CreateService from "./modals/CreateService";
import { deleteServicesAPI, getServicesAPI } from "../../api/api";
import NoData2 from "../../components/NoData2";
import Swal from "sweetalert2";
import { LoadingOutlined } from "@ant-design/icons";
import UpdateService from "./modals/UpdateService";
import ServiceDetailModal from "./modals/ServiceDetailModal";

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [dLoading, setDLoading] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detail, setDetail] = useState(null);

  const fetchRecords = useCallback(async () => {
    try {
      setLoading(true);
      const result = await getServicesAPI(current, limit, query);
      if (result?.data?.data) {
        setTotal(result?.data?.total);
        setState(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [current, search]);

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to delete this service?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setDLoading(true);
          const res = await deleteServicesAPI(id);
          if (res.data.data) {
            setDLoading(false);
            await fetchRecords();
            Swal.fire("Deleted!", "The service has been deleted.", "success");
          }
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setDLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  useEffect(() => {
    setCurrent(1);
  }, [limit]);
  return (
    <section className="service_list">
      <h1 className="page_title">Services</h1>
      <p className="page_dis">View and manage your services.</p>

      <div className="service_list_head">
        <p>
          List of {state.length} records outof {total} records
        </p>
        <div className="service_sub_head">
          <button onClick={() => setModalOpen(true)}>
            <i className="bx bx-plus"></i>Create Service
          </button>
          <div className="search_group">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search by service name"
            />
            <button onClick={() => setSearch(!search)}>
              <i className="bx bx-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="service_list_wrapper">
        {loading ? (
          [1, 2, 3, 4, 5, 6]?.map((d) => (
            <div className="service_list_card2">
              <Skeleton.Button
                style={{ height: "170px", width: 300 }}
                active
                block
                key={d}
              />
            </div>
          ))
        ) : !state.length ? (
          <NoData2 colspan={5} />
        ) : (
          state?.map((d) => (
            <div className="service_list_card2" style={{ background: d.color }}>
              <div className="box">
                <img src={d.cardImg.url} />
              </div>
              <h3 style={{ color: d.textColor }}>{d.title}</h3>
              <p>{String(d.shortDescription).slice(0, 100)}...</p>

              <Popover
                content={
                  <div className="options_pop">
                    <ul>
                      <li
                        onClick={() => {
                          setDetail(d);
                          setDetailOpen(true);
                        }}
                      >
                        <i className="bx bx-detail"></i>View Service
                      </li>
                      <li
                        onClick={() => {
                          setUpdateData(d);
                          setUpdateModal(true);
                        }}
                      >
                        <i className="bx bx-edit"></i>Edit Service
                      </li>
                      <li
                        onClick={() =>
                          dLoading === false && handleDelete(d._id)
                        }
                      >
                        {dLoading ? (
                          <LoadingOutlined />
                        ) : (
                          <i className="bx bx-trash-alt"></i>
                        )}
                        Remove Service
                      </li>
                    </ul>
                  </div>
                }
              >
                <div className="dot">
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </div>
              </Popover>
            </div>
          ))
        )}
      </div>
      <div className="service_list_foot">
        {loading && total > limit && (
          <Pagination
            total={total}
            current={current}
            pageSize={limit}
            onChange={(page, size) => {
              setCurrent(page);
              setLimit(size);
            }}
            showSizeChanger
          />
        )}
      </div>

      {modalOpen && (
        <CreateService
          fetchRecords={fetchRecords}
          open={modalOpen}
          setOpen={setModalOpen}
        />
      )}

      {updateModal && (
        <UpdateService
          fetchRecords={fetchRecords}
          open={updateModal}
          setOpen={setUpdateModal}
          data={updateData}
        />
      )}

      {detailOpen && (
        <ServiceDetailModal
          open={detailOpen}
          setOpen={setDetailOpen}
          data={detail}
        />
      )}
    </section>
  );
};

export default Services;
