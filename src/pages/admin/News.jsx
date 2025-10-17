import { Pagination, Popover } from "antd";
import { useCallback, useEffect, useState } from "react";
import { deleteNewsAPI, getNews } from "../../api/api";
import NoData from "../../components/NoData";
import Loader from "../../components/Loader";
import CreateNewsModal from "./modals/CreateNewsModal";
import Swal from "sweetalert2";
import NewsDetailModal from "./modals/NewsDetailModal";
import UpdateNewsModal from "./modals/UpdateNewsModal";
import {LoadingOutlined} from "@ant-design/icons";

const News = () => {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [open, setOpen] = useState(false);

  const [detail, setDetail] = useState("");
  const [detailOpen, setDetailOpen] = useState(false);
  const [updateData, setUpdateData] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [dLoading, setDLoading] = useState(false);
  const token = localStorage.getItem("token");

  const fetchRecords = useCallback(async () => {
    try {
      setLoading(true);
      const result = await getNews(current, limit, query, token);
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
        text: "Do you want to delete this news?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setDLoading(true);
          const res = await deleteNewsAPI(id, token);
          if (res.data.data) {
            setDLoading(false);
            await fetchRecords();
            Swal.fire("Deleted!", "The news has been deleted.", "success");
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
    <section className="contact_list">
      <h1 className="page_title">News</h1>
      <p className="page_dis">
        Manage and review all your news updates in one place.
      </p>
      <div className="table_head">
        <p>
          Showing {state.length} records, out of {total} available
        </p>
        <div className="table_head_right">
          <button onClick={() => setOpen(true)}>Create News</button>
          <div className="group">
            <input
              type="text"
              placeholder="Search by news title"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => setSearch(!search)}>
              <i className="bx bx-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="table_wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: "130px" }}>Date</th>
              <th>Title</th>
              <th>Description</th>
              <th style={{ width: "100px" }}>Status</th>
              <th style={{ width: "100px" }}>Action</th>
            </tr>
          </thead>
          {loading ? (
            <Loader map={[1, 2, 3, 4,5]} colMap={[1, 2, 3, 4,5]} />
          ) : state.length === 0 ? (
            <NoData colspan={5} />
          ) : (
            <tbody>
              {state?.map((d, i) => (
                <tr className={i % 2 === 0 ? "active" : ""} key={i}>
                  <td>{new Date(d.createdAt).toDateString()}</td>
                  <td>{d?.title}</td>
                  <td>{d?.description}</td>
                  <td>{d?.status ? "Published" : "Unpublish"}</td>
                  <td>
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
                              <i className="bx bx-detail"></i>View News
                            </li>
                            <li
                              onClick={() => {
                                setUpdateData(d);
                                setUpdateModal(true);
                              }}
                            >
                              <i className="bx bx-edit"></i>Edit News
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
                              Remove News
                            </li>
                          </ul>
                        </div>
                      }
                      placement="left"
                    >
                      <div className="dot">
                        <i className="bx bx-dots-horizontal-rounded"></i>
                      </div>
                    </Popover>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div className="table_foot">
        {!loading && total > limit && (
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

      {open && (
        <CreateNewsModal
          open={open}
          setOpen={setOpen}
          fetchRecords={fetchRecords}
        />
      )}

      {detailOpen && (
        <NewsDetailModal
          open={detailOpen}
          setOpen={setDetailOpen}
          data={detail}
        />
      )}

      {updateModal && (
        <UpdateNewsModal
          fetchRecords={fetchRecords}
          data={updateData}
          open={updateModal}
          setOpen={setUpdateModal}
        />
      )}
    </section>
  );
};

export default News;
