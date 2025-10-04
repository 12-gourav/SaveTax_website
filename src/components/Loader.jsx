import { Skeleton } from "antd";

const Loader = ({map,colMap}) => {
  return (
    <tbody>
      {map?.map((d1) => (
        <tr key={d1}>
          {colMap?.map((d2) => (
            <td key={d2}>
              <Skeleton.Button
                active
                block
                style={{ background: "oklch(97% 0.014 254.604)" }}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Loader;
