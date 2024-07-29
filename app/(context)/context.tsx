import React, { createContext, useState, useContext, ReactNode } from 'react';


interface MyContextType {
  user: string;
  setUsername: (user: string) => void;
  globTodos:any;
  setGlobTodos:(todos:[])=>void;
}




const MyContext = createContext<MyContextType | undefined>(undefined);


export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string>('');
  const [globTodos, setglobTodos] = useState([]);

  const setUsername = (user: string) => {
    setUser(user);
  };

  const setGlobTodos = (todos:any) =>{
    setglobTodos(todos);
  }

  return (
    <MyContext.Provider value={{ user, setUsername , globTodos , setGlobTodos }}>
      {children}
    </MyContext.Provider>
  );
};


export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
