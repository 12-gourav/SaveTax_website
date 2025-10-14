import { DatePicker, Pagination, Skeleton } from "antd";
import { useCallback, useEffect, useState } from "react";
import { getContact, getNewsletter } from "../../api/api";
import NoData from "../../components/NoData";
import Loader from "../../components/Loader";

const NewsLetter = () => {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);
  const token = localStorage.getItem("token")

  const fetchRecords = useCallback(async () => {
    try {
      setLoading(true);
      const result = await getNewsletter(current, limit, query,token);
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

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  useEffect(() => {
    setCurrent(1);
  }, [limit]);

  return (
    <section className="contact_list">
      <h1 className="page_title">Newsletters</h1>
      <p className="page_dis">
        Manage and review all your newsletters updates in one place.
      </p>
      <div className="table_head">
        <p>
          Showing {state.length} records, out of {total} available
        </p>
        <div className="group">
          <input
            type="text"
            placeholder="Search by email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={()=>setSearch(!search)}><i className='bx bx-search'></i></button>
        </div>
      </div>
      <div className="table_wrapper">
        <table>
          <thead>
            <tr>
              <th style={{width:"40%"}}>Date</th>
              <th>Email</th>
            </tr>
          </thead>
          {loading ? (
            <Loader map={[1, 2]} colMap={[1, 2]} />
          ) : state.length === 0 ? (
            <NoData colspan={2} />
          ) : (
            <tbody>
              {state?.map((d, i) => (
                <tr className={i % 2 === 0 ? "active" : ""} key={i}>
                  <td>{new Date(d.createdAt).toDateString()}</td>

                  <td>
                    <a href={`mailto:${d.email}`}>{d.email}</a>
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
    </section>
  );
};

export default NewsLetter;
