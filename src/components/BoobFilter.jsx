import { useContext } from "react";
import { BoobContext } from "./context/BoobContext";

const BoobFilter = () => {
  const { filter, setFilter } = useContext(BoobContext)
  return (
    <>
      <div>🔎 Фильтр:</div>
      <div>
        <input
          name="filtred__button"
          id="all"
          type="radio"
          value="all"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        />
        <label htmlFor="all">Все</label>
      </div>
      <div>
        <input
          className="filtred__button_boob"
          name="filtred__button"
          id="read"
          type="radio"
          value="read"
          checked={filter === "read"}
          onChange={() => setFilter("read")}
        />
        <label htmlFor="read">Прочитанные</label>
      </div>
      <div>
        <input
          className="filtred__button__boob"
          name="filtred__button"
          id="unread"
          type="radio"
          value="unread"
          checked={filter === "unread"}
          onChange={() => setFilter("unread")}
        />
        <label htmlFor="unread">Непрочитанные</label>
      </div>
    </>
  );
};

export default BoobFilter;
