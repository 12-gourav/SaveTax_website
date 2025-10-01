import { DatePicker, Pagination } from "antd";

const ContactList = () => {
  return (
    <section className="contact_list">
      <h1 className="page_title">Contact Clients</h1>
      <p className="page_dis">
        Monitor tax savings, track contact clients, and manage operations
        seamlessly.
      </p>
      <div className="table_head">
        <p>Total 10 Records available out of 30 Records</p>
        <DatePicker/>
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
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((d) => (
              <tr className={d%2===0 ? "active":""}>
                <td >{new Date("12/09/2025").toDateString()}</td>
                <td>Test Client1</td>
                <td>testclient@gmail.com</td>
                <td>+91 8382088052</td>
                <td>
                  This is my test message If you don’t want all window scrolls
                  to close it, but only when the parent div scrolls:
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table_foot">
        <Pagination total={30}/>
      </div>
    </section>
  );
};

export default ContactList;
