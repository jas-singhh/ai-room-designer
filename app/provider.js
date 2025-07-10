"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";

const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    user && verifyUser();
  }, [user]);

  const verifyUser = () => {
    axios
      .post("/api/verify-user", { user })
      .then((res) => console.log("result from api: ", res))
      .catch((err) => console.log(err));
  };

  return <>{children}</>;
};

export default Provider;
