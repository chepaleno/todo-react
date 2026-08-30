import { useContext } from "react";
import { BoobContext } from "./context/BoobContext";
import Field from "./Field/Field";

const BoobSearch = (props) => {
  const { searchBoob, setSearchBoob } = useContext(BoobContext);

  return (
    <form  onSubmit={(event) => event.preventDefault()}>
      <Field
      className="searchBoob"
        label="Поиск"
        type="search"
        value={searchBoob}
        onInput={(e) => setSearchBoob(e.target.value)}
      ></Field>
    </form>
  );
};

export default BoobSearch;
