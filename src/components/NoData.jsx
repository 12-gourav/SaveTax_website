import img from "../assets/img/nodata.svg";

const NoData = ({ colspan }) => {
  return (
    <tbody>
      <tr>
        <td colSpan={colspan}>
          <div className="nodata">
            <img src={img} />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default NoData;
