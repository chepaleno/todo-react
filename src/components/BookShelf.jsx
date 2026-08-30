import { useEffect, useState, useRef, useContext } from "react";
import AddBoobForm from "./AddBoobForm";
import BoobFilter from "./BoobFilter";
import BoobInfo from "./BoobInfo";
import BoobList from "./BoobList";
import BoobSearch from "./BoobSearch";
import { BoobContext } from "./context/BoobContext";


const BookShelf = () => {
    const { timer, filteredBoobs } = useContext(BoobContext);

  if (timer) {
    return  <div>Страница загружается</div>;
  }
  {
    return (
        <div className="boob">
          <h1 className="boob__title">📚 Книжная полка</h1>
          <AddBoobForm />
          <BoobFilter />
          <BoobInfo />
          <BoobSearch />
          <BoobList boobs={filteredBoobs} />
        </div>
    );
  }
};

export default BookShelf;
