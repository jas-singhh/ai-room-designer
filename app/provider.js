"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserContext } from "./contexts/UserContext";

const Provider = ({ children }) => {
  const [dbUser, setdbUser] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    user && verifyUser();
  }, [user]);

  const verifyUser = () => {
    axios
      .post("/api/verify-user", { user })
      .then((res) => {
        if (res.data.result[0]) setdbUser(res.data.result[0]);
        else console.log("No user found in database");
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ dbUser }}>{children}</UserContext.Provider>
  );
};

export default Provider;
