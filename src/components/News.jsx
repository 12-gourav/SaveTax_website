import { Tooltip } from "antd";
import { news } from "../constants/news";

const News = () => {
  return (
    <div className="news" aria-hidden>
          {news?.map((d) => (
            <Tooltip placement="bottom" title={d.short_description}>
              <div className="news_item" key={d.id}>
                <i className="bx bxs-megaphone bx-flip-horizontal"></i>
                <p>{d.title}</p>
              </div>
            </Tooltip>
          ))}
          
    </div>
  );
};

export default News;
