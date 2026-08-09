import { useState } from "react";

const BookShelf = () => {
  const [boobs, setBoobs] = useState(() => {
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
};
export default BookShelf;
