import { useEffect, useState, useRef } from "react";
import AddBoobForm from "./AddBoobForm";
import BoobFilter from "./BoobFilter";
import BoobInfo from "./BoobInfo";
import BoobList from "./BoobList";

const BookShelf = () => {
  const [timer, setTimer] = useState(true);
  // Симуляция загрузки данных (задержка 1 сек)
  useEffect(() => {
    const timerAPI = setTimeout(() => {
      setTimer(false);
    }, 1000);
    return () => clearTimeout(timerAPI);
  }, []);

  const [boobs, setBoobs] = useState(() => {
    const savedBoobs = localStorage.getItem("boobs");
    if (savedBoobs) {
      return JSON.parse(savedBoobs);
    }
    return [
      {
        id: "1",
        title: "Война и мир",
        author: "Лев Толстой",
        year: "1969",
        isRead: true,
      },
      {
        id: "2",
        title: "Преступление и наказание",
        author: "Ф. Достоевский",
        year: "1866",
        isRead: false,
      },
    ];
  });

  const navodchickRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("boobs", JSON.stringify(boobs));
  }, [boobs]);

  const [filter, setFilter] = useState("all");

  const filteredBoobs = boobs.filter((boob) => {
    if (filter === "all") return true;
    if (filter === "read") return boob.isRead === true;
    if (filter === "unread") return boob.isRead === false;
  });

  const [newBoobInput, setNewBoobInput] = useState("");
  const [newAuthorInput, setNewAuthorInput] = useState("");
  const [newYearInput, setNewYearInput] = useState("");

  const addBoob = () => {
    if (
      newBoobInput.trim().length > 0 &&
      newAuthorInput.trim().length > 0 &&
      newYearInput.trim().length > 0
    ) {
      const newBoob = {
        id: Date.now().toString(),
        title: newBoobInput,
        author: newAuthorInput,
        year: newYearInput,
        isRead: false,
      };
      setBoobs([...boobs, newBoob]);
      setNewBoobInput("");
      setNewAuthorInput("");
      setNewYearInput("");
    }
  };

  const onSuccessBoobItemComplete = (isRead, id) => {
    {
      setBoobs(
        boobs.map((boob) => {
          if (boob.id === id) {
            return { ...boob, isRead };
          }
          return boob;
        }),
      );
    }
  };

  const onDeleteBoobItem = (id) => {
    {
      setBoobs(boobs.filter((boob) => boob.id !== id));
    }
  };

  console.log(navodchickRef);

  useEffect(() => {
    if (timer === false) {
      navodchickRef.current.focus();
    }
  }, [timer]);

  if (timer) {
    return <div>Страница загружается</div>;
  }
  {
    return (
      <div className="boob">
        <h1 className="boob__title">📚 Книжная полка</h1>
        <AddBoobForm
          className="AddBoobForm"
          addBoob={addBoob}
          newBoobInput={newBoobInput}
          setNewBoobInput={setNewBoobInput}
          newAuthorInput={newAuthorInput}
          setNewAuthorInput={setNewAuthorInput}
          newYearInput={newYearInput}
          setNewYearInput={setNewYearInput}
          navodchickRef={navodchickRef}
        />
        <BoobFilter filter={filter} setFilter={setFilter} />
        <BoobInfo boobs={boobs} />
        <BoobList
          boobs={filteredBoobs}
          onSuccessBoobItemComplete={onSuccessBoobItemComplete}
          onDeleteBoobItem={onDeleteBoobItem}
        />
      </div>
    );
  }
};

export default BookShelf;
