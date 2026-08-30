import { useState, useEffect, useRef } from "react";

const useBoobs = () => {
const [timer, setTimer] = useState(true);
  const [searchBoob, setSearchBoob] = useState("");

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

  const filteredBoobs = boobs
    .filter((boob) => {
      if (filter === "all") return true;
      if (filter === "read") return boob.isRead === true;
      if (filter === "unread") return boob.isRead === false;
    })
    .filter((boob) => {
      if (!searchBoob.trim()) return true;
      const query = searchBoob.trim().toLocaleLowerCase();
      return (
        boob.title.toLocaleLowerCase().includes(query) ||
        boob.author.toLocaleLowerCase().includes(query) ||
        boob.year.includes(query)
      );
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
    
    return {
        addBoob,
        newBoobInput,
        setNewBoobInput,
        newAuthorInput,
        setNewAuthorInput,
        newYearInput,
        setNewYearInput,
        navodchickRef,

        filter,
        setFilter,

        boobs,

        onSuccessBoobItemComplete,
        onDeleteBoobItem,

        timer,
        filteredBoobs,

        searchBoob,
        setSearchBoob,
    }
}

export default useBoobs