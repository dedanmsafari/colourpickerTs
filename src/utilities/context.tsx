import React from "react";

type CreateContext = <T extends object>() => readonly [
  () => T,
  React.Provider<T | null>
];

export const createContext: CreateContext = <T extends object>() => {
  const Context = React.createContext<T | null>(null);

  function useContext() {
    const ctx = React.useContext(Context);
    if (ctx === null) {
      throw new Error("Context can only be used within a Provider");
    }

    return ctx;
  }

  return [useContext, Context.Provider] as const;
};
