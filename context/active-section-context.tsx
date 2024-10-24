"use client";

import React, { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// To be able to use the activeSection state in other components, we need to create a context
// We wrap everything that needs access to the value with the context provider
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

// This component keeps track of the state of the active section
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// We use a custom hook to handle the null value of the context. We use this hook in components like Header.
export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);
  if (context == null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider",
    );
  }
  return context;
}
