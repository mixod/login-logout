import { useMutation } from "@tanstack/react-query";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../Apis/MainApi";

function Nav() {
  const navigate = useNavigate();
  const mutationLogout = useMutation({
    mutationFn: logout,
    onSuccess: (resp) => {
      console.log("res", resp);
      localStorage.removeItem("token");
      navigate("/login");
    },
  });

  const onLogout = () => {
    const token = localStorage.getItem("token");
    mutationLogout.mutate(token);
  };

  return (
    <div className="bg-gray-300 h-10 w-full flex justify-center items-center">
      <ul className="flex justify-center items-center space-x-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
