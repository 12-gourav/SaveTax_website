import { DatePicker, Pagination, Skeleton } from "antd";
import { useCallback, useEffect, useState } from "react";
import { getContact } from "../../api/api";
import NoData from "../../components/NoData";
import Loader from "../../components/Loader";

const ContactList = () => {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [date, setDate] = useState(null);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);

  const fetchRecords = useCallback(async () => {
    try {
      setLoading(true);
      const result = await getContact(current, limit, "Contact", date);
      if (result?.data?.data) {
        setTotal(result?.data?.total);
        setState(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [current, date]);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  useEffect(() => {
    setCurrent(1);
  }, [limit]);

  return (
    <section className="contact_list">
      <h1 className="page_title">Contact Clients</h1>
      <p className="page_dis">View and manage your contact clients.</p>
      <div className="table_head">
        <p>
          Showing {state.length} records, out of {total} available
        </p>
        <DatePicker onChange={(date, dateString) => setDate(dateString)} />
      </div>
      <div className="table_wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          {loading ? (
            <Loader map={[1, 2, 3, 4, 5]} colMap={[1, 2, 3, 4, 5]} />
          ) : state.length === 0 ? (
            <NoData colspan={5} />
          ) : (
            <tbody>
              {state?.map((d, i) => (
                <tr className={i % 2 === 0 ? "active" : ""}>
                  <td>{new Date(d.createdAt).toDateString()}</td>
                  <td>{d.name}</td>
                  <td>
                    <a href={`mailto:${d.email}`}>{d.email}</a>
                  </td>
                  <td>
                    <a href={`tel:+91${d.phone}`}>+91 {d.phone}</a>
                  </td>
                  <td>{d.query}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div className="table_foot">
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
    </section>
  );
};

export default ContactList;
