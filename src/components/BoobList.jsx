import { useContext } from "react";
import BoobItem from "./BoobItem";
import { BoobContext } from "./context/BoobContext";

const BoobList = (props) => {
  const { boobs = [], filteredBoobs } = props;
  const { onSuccessBoobItemComplete, onDeleteBoobItem } =
    useContext(BoobContext);
  return (
    <ul>
      {(filteredBoobs ?? boobs).map((boob) => (
        <BoobItem
          key={boob.id}
          id={boob.id}
          title={boob.title}
          author={boob.author}
          year={boob.year}
          isRead={boob.isRead}
          onSuccessBoobItemComplete={onSuccessBoobItemComplete}
          onDeleteBoobItem={onDeleteBoobItem}
        />
      ))}
    </ul>
  );
};

export default BoobList;
