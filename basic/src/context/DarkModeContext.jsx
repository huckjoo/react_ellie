import { createContext, useState } from 'react';

export const DarkModeContext = createContext(); // global data

// context를 만들 때는 provider도 만들어 줘야 함 (data를 가지고 있는 우산을 만든다고 생각)
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
