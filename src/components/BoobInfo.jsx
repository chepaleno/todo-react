import { useContext } from "react";
import { BoobContext } from "./context/BoobContext";

const BoobInfo = () => {
  const { boobs } = useContext(BoobContext);
  const filtredBoobs = boobs.filter((boob) => boob.isRead === true)
  return (
    <div className="boob__stats">
      Всего книг: {boobs.length}, Прочитано: {filtredBoobs.length}
    </div>
  );
};

export default BoobInfo;
