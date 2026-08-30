import { createContext } from "react";
import { useState, useEffect, useRef } from "react";
import useBoobs from "../../hooks/useBoobs";

export const BoobContext = createContext({});

export const BoobProvider = (props) => {
  const { children } = props;

  const {
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
  } = useBoobs()

  return (
    <BoobContext.Provider
      value={{
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
      }}
    >
      {children}
    </BoobContext.Provider>
  );
};
